const User = require('./User');

class ActiveUsers {
  constructor() {
    this.users = {};
  };

  _updateCompatibleUsers() {

  };

  _removeCompatibleUser() {

  };

  addUser(userData, peerId) {
    const newUser = new User(userData, peerId);
    this.users[newUser.userId] = newUser;
  };

  removeUser(userId){
    delete this.users[userId];
  };

  toggleLooking() {

  };

  toggleInCall() {

  };
}

module.exports = ActiveUsers;