const router = require("express").Router();

module.exports = (dependencies) => {
  const {db, getUserInterests, activeUsers} = dependencies;

  router.post('/', (req, res) => {
    const {email, peerId} = req.body;

    getUserInterests(email).then(userData => {
      const newUser = activeUsers.addUser(userData, peerId);
      res.status(304).send();
    });
  });

  return router;
};