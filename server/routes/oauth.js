const router = require("express").Router();

module.exports = (authURL) => {
  router.get('/', (req, res) => {
    res.json(authURL);
  });
  
  return router;
};
  
