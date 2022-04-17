class Interest {
  constructor(userId) {
    this.users = new Set(userId);
  }

  addUser(userId) {
    this.users.set(userId);
  }

  removeUser(userId) {
    
  }
}

class Lobby {
  constructor() {
    this.usersByInterest = {};
  };

  _deleteInterestIfEmpty(interest) {
    
  }

  addUser(user) {

  }

  removeUser(user) {

  }
}

module.exports = Lobby;