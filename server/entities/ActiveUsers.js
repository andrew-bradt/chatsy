const User = require('./User');

class ActiveUsers {
  constructor() {
    this.users = {};
  };

  removeUser(userId){
    delete this.users[userId];
  };

  addUser(userData, peerId) {
    const newUser = new User(userData, peerId);
    this.users[newUser.userId] = newUser;
    return newUser;
  };

  getUserById (userId) {
    return this.users[userId];
  }
}

module.exports = ActiveUsers;