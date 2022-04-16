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

const toggleLooking = (userId) => {
  const isLookingForPeer = users[userId].isLookingForPeer;
  users[userId].isLookingForPeer = !isLookingForPeer;
};

module.exports = {
  users,
  addUser,
  removeUser,
  toggleLooking
};