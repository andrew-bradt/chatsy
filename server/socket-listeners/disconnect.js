module.exports = (activeUsers, lobby) => (socketId) => {
  const user = activeUsers.getUserBySocketId(socketId);
  lobby.removeUser(user);
  activeUsers.removeUser(user.userId);
};