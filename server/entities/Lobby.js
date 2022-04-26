// TBD: add a removeMatch method

class Lobby {
  constructor() {
    this.usersByInterest = {};
    this.usersPreviousMatches = {};
  }

  addMatch(userIdKey, connectedUserId) {
    this.usersPreviousMatches[userIdKey].add(connectedUserId);
    this.usersPreviousMatches[connectedUserId].add(userIdKey);
  }

  haveUsersPreviouslyMatched (userIdLookup, userIdToCompare) {
    return this.usersPreviousMatches[userIdLookup].has(userIdToCompare);
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

    if (!this.usersPreviousMatches[user.userId]) {
      this.usersPreviousMatches[user.userId] = new Set();
    }
  }

  removeUser(user) {
    user.interests.forEach(interest => this.removeUserInterest(interest, user.userId));
  }
}

module.exports = Lobby;