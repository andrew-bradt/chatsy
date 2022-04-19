const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

module.exports = (dependencies) => {
  const {db, activeUsers} = dependencies;
  const {getUserInterests} = require('../helpers/queries')(db);

  router.post('/', (req, res) => {
    const { email } = req.body;
    const peerId = uuidv4();

    getUserInterests(email).then(userData => {
      const newUser = activeUsers.addUser(userData, peerId);
      const {userId, interests} = newUser;
      const interestsArray = [...interests];
      res.json({userId, interestsArray, peerId});
    });
  });

  return router;
};