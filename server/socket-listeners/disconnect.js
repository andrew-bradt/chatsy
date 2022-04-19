module.exports = (io, activeUsers, lobby) => (socketId) => {
  const user = require('../helpers/getUserBySocketId')(activeUsers)(socketId);
  // lobby.removeUser(userToRemove);
  // activeUsers.removeUser(userToRemove.userId);
  // console.log(lobby);
  // console.log(activeUsers);
}

// disconnect end is running on server
// socket id is being passed from client to server on disconnect


// issue:
// on-disconnect doesnt appear to be emitted on server or isn't received on client
// or client isn't emitting handle-disconnect after receiving on-disconnect

// module.exports = (io) => (remoteSocketId) => {
//   io.to(remoteSocketId).emit("endCall");
// };