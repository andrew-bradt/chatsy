const ActiveUsers = require('../entities/ActiveUsers');
const Lobby = require('../entities/Lobby');

module.exports = {
  lobby: new Lobby(),
  activeUsers: new ActiveUsers()
};