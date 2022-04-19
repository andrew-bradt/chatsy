module.exports = (io) => (remoteSocketId) => {
  io.to(remoteSocketId).emit("endCall");
};