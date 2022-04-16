const users = {};

const addUser = (user) => {
  users[user.userId] = user;
};

module.exports = {
  users,
  addUser
};