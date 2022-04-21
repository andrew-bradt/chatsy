const router = require("express").Router();
const {authURL} = require('../configs/oauth.config');

router.get('/', (req, res) => {
  res.json(authURL);
});

module.exports = router;