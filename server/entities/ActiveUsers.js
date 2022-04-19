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

  getUserBySocketId (socketId) {
    const userIds = Object.keys(this.users);
    for (const userId of usersIds) {
      const user = this.getUserById(userId);
      if (user.socketId === socketId) return user;
    }
  }
}

module.exports = ActiveUsers;