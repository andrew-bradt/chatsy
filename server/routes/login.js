const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const { oauth2Client } = require("../configs/oauth.config");
const checkGoogleUser = require("../youtube-queries/check-user");

const userSignin = (email, db, activeUsers) => {
  const { getUserInterests } = require("../helpers/queries")(db);
  const peerId = uuidv4();

  return getUserInterests(email).then(userData => {
    const newUser = activeUsers.addUser(userData, peerId);
    const { userId, interests } = newUser;
    const interestsArray = [...interests];
    return { userId, interestsArray, peerId };
  });
};

const oauthUserValidation = async (code, auth, db) => {
  const { tokens } = await auth.getToken(code);
  auth.setCredentials(tokens);

  const email = await checkGoogleUser(auth, db);
  return email;
};

module.exports = dependencies => {
  const { db, activeUsers } = dependencies;

  router.post("/", (req, res) => {
    const { email, oauthCode } = req.body;

    if (oauthCode) {
      const code = decodeURIComponent(oauthCode);
      oauthUserValidation(code, oauth2Client, db)
        .then(email => userSignin(email, db, activeUsers))
        .then(result => res.json(result));
    }

    if (email) {
      userSignin(email, db, activeUsers).then(result => {
        res.json(result);
      });
    }
  });

  return router;
};