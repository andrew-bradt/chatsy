module.exports = (io, activeUsers) => ({remoteSocketId, userId}) => {
  const {email} = activeUsers.getUserById(userId);
  io.to(remoteSocketId).emit('contact-info', {email});
};