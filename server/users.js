const users = {};
const compatibleUsers = {};

const addUser = (user) => {
  // TODO: should also modify compatibleUsers with a helper
  users[user.userId] = user;
};

const removeUser = (id) => {
  // TODO: should also modify compatibleUsers a helper
  delete users[id];
};


module.exports = {
  users,
  compatibleUsers,
  addUser,
  removeUser
};