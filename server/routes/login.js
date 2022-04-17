const router = require("express").Router();

module.exports = (dependencies) => {
  const {db, getUserInterests} = dependencies;

  router.post('/', (req, res) => {
    getUserInterests(req.body.email).then(user => {
      res.json(user);
    });
  });

  return router;
};