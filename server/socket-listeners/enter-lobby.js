module.exports = (activeUsers, lobby) => (userId) => {
  const user = activeUsers.getUserById(userId);
  lobby.addUser(user);
  console.log(lobby);
};