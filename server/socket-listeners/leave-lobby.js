module.exports = (activeUsers, lobby) => (userId) => {
  const user = activeUsers.getUserById(userId);
  lobby.removeUser(user);
};