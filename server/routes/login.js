const router = require("express").Router();

module.exports = (dependencies) => {
  const {db, getUserInterests, activeUsers} = dependencies;

  router.post('/', (req, res) => {
    const {email, peerId} = req.body;

    getUserInterests(email).then(userData => {
      const newUser = activeUsers.addUser(userData, peerId);
      const {userId, interests} = newUser;
      const interestsArray = [...interests];
      res.json({userId, interestsArray});
    });
  });

  return router;
};