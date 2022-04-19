module.exports = (activeUsers) => (userId, socketId) => {
  const user = activeUsers.getUserById(userId);
  user.socketId = socketId;
};