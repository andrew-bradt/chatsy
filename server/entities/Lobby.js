class Lobby {
  constructor() {
    this.usersByInterest = {};
  }

  addInterest(interest, userId) {
    if (this.usersByInterest[interest]) {
      this.usersByInterest[interest].add(userId);
    } else {
      this.usersByInterest[interest] = new Set().add(userId);
    }
  }

  removeUserInterest(interest, userId) {
    const usersWithInterest = this.usersByInterest[interest];

    if (usersWithInterest && usersWithInterest.length) {
      usersWithInterest.delete(userId);
    } else {
      delete this.usersByInterest[interest];
    }
  }

  addUser(user) {
    user.interests.forEach((interest) => this.addInterest(interest, user.userId));
  }

  removeUser(user) {
    user.interests.forEach(interest => this.removeUserInterest(interest, user.userId));
  }
}

module.exports = Lobby;