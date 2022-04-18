class Lobby {
  constructor() {
    this.usersByInterest = {};
  };

  addInterest(interest, userId) {
    if (this.usersByInterest[interest]) {
      this.usersByInterest[interest].add(userId);
    } else {
      this.usersByInterest[interest] = new Set().add(interest);
    }
    console.log(this.usersByInterest);
  }

  addUser(user) {
    user.interests.forEach((interest) => this.addInterest(interest, user.userId));;
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