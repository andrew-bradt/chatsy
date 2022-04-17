class Call {
  constructor(...users) {
    this.userIds = users.map(user => user.userId);
    this.sharedInterests = this._getSharedInterests(users);
  }

  _getSharedInterests(users) {
    const sharedInterests = [];
    const [user1, user2] = users;
    
    user1.interests.forEach(interest => {
      user2.interests.has(interest) && sharedInterests.push(interest);
    })

    return sharedInterests;
  }

}

module.exports = Call;