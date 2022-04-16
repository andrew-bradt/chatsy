const users = {};

const {findCompatibleUsers, removeCompatibleUser} = require('./helpers/compare-users')(users);

const addUser = (user) => {
  users[user.userId] = user;
  findCompatibleUsers(user);
};

const removeUser = (userId) => {
  removeCompatibleUser(userId);
  delete users[userId];
};

const toggleLooking = (userId) => {
  const isLookingForPeer = users[userId].isLookingForPeer;
  users[userId].isLookingForPeer = !isLookingForPeer;
};

const toggleInCall = (userId) => {
  const isInCall = users[userId].isInCall;
  users[userId].isInCall = !isInCall;
};

module.exports = {
  users,
  addUser,
  removeUser,
  toggleLooking,
  toggleInCall
};