module.exports = (db) => {
  const {getUserId, getUserInterests} = require('./helpers/queries')(db);
  const parseUser = require('./helpers/parsers');

  getUserInterests('link@yahoo.com')
  .then(user => {
    const parsedUser = parseUser(user);
    console.log(parsedUser);
  });
  return {

  };
};