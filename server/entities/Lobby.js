class Lobby {
  constructor() {
    this.usersByInterest = {};
  };

  addInterest(interest, userId) {
    // const newInterest = this.userByInterest[interest] || new Set();
    // newInterest.add(userId);
    // this.usersByInterest[interest] = newInterest;
    if (this.usersByInterest[interest]) {
      this.usersByInterest[interest].add(userId);
    } else {
      this.usersByInterest[interest] = new Set().add(interest);
    }
    console.log(this.usersByInterest);
  }

  addUser(user) {
    user.interests.forEach(interest => {
      if (this.usersByInterest[interest]) {
        this.usersByInterest[interest].add(user.userId);
      } else {
        this.addInterest(interest, user.userId);
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