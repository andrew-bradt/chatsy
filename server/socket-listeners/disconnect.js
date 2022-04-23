module.exports = (activeUsers, lobby) => (socketId) => {
  const user = activeUsers.getUserBySocketId(socketId);
  if (Object.keys(lobby.usersByInterest).length) {
    lobby.removeUser(user);
  }
  activeUsers.removeUser(user.userId);
};