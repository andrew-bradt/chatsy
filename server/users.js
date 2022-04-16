const users = {};

const addUser = (user) => {
  users[user.userId] = user;
};

const removeUser = (id) => {
  delete users[id];
};

module.exports = {
  users,
  addUser,
  removeUser
};