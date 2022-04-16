const users = {};

const {findCompatibleUsers, removeCompatibleUser} = require('./helpers/compare-users')(users);

const addUser = (user) => {
  users[user.userId] = user;
  findCompatibleUsers(user);
};

const removeUser = (id) => {
  removeCompatibleUser(id);
  delete users[id];
};

module.exports = {
  users,
  addUser,
  removeUser
};