const { google } = require('googleapis');

const checkGoogleUser = async(auth, db) => {
  // import db related queries methods 
  const {getUserId, addUser} = require('../helpers/queries')(db);

  // call oauth2 api for user email
  const o2 = google.oauth2({
    auth: auth,
    version: "v2"
  });
  const response = await o2.userinfo.get({});
  const userEmail = response.data.email;

  // check if user exist in db
  const userId = await getUserId(userEmail);
  if (userId) {
    return userEmail;
  }

  // if user is new, add to db
  const dbRes = await addUser(userEmail);
  return dbRes.rows[0].email;

};

module.exports = checkGoogleUser;