class Lobby {
  constructor() {
    this.usersByInterest = {};
  };

  _addInterest(interest, userId) {
    const newInterest = new Set();
    newInterest.add(userId);
    this.usersByInterest[interest] = newInterest;
  }

  addUser(user) {
    user.interests.forEach(interest => {
      if (this.usersByInterest[interest]) {
        this.usersByInterest[interest].add(user.userId);
      } else {
        this._addInterest(interest, user.userId);
      }
    });
  }

  removeUser(user) {
    user.interests.forEach(interest => {
      const usersWithInterest = this.usersByInterest[interest];
      if (usersWithInterest.length) {
        usersWithInterest.delete(user.userId);
      } else {
        delete this.usersByInterest[interest];
      }
    });
  }
}

module.exports = Lobby;