const users = {};
const compatibleUsers = {};

const {findCompatibleUsers, removeCompatibleUser} = require('./helpers/compare-users')(users, compatibleUsers);

const addUser = (user) => {
  findCompatibleUsers(user);
  users[user.userId] = user;
};

const removeUser = (id) => {
  removeCompatibleUser(id);
  delete users[id];
};

module.exports = {
  users,
  compatibleUsers,
  addUser,
  removeUser
};