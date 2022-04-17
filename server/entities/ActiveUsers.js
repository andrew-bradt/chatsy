const ActiveUser = require('./ActiveUser');

class ActiveUsers {
  constructor() {
    this.users = {};
  };

  _updateCompatibleUsers() {

  };

  _removeCompatibleUser() {

  };

  addUser(userData, peerId) {
    const newUser = new ActiveUser(userData, peerId);
    this.users[newUser.userId] = newUser;
  };

  removeUser(){

  };

  toggleLooking() {

  };

  toggleInCall() {

  };
}

module.exports = ActiveUsers;