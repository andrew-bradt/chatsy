module.exports = (io) => (remoteSocketId, msg) => {
  io.to(remoteSocketId).emit('msg', {msg});
  console.log(msg);
};