class Call {
  constructor(...users) {
    this.users = users;
    this.userIds = users.map(user => user.userId);
    this.sharedInterests = this._getSharedInterests(users);
  }

  _getSharedInterests(users) {
    const sharedInterests = [];
    const [user1, user2] = users;

    user1.interests.forEach(interest => {
      user2.interests.has(interest) && sharedInterests.push(interest);
    });

    return sharedInterests;
  }

  start(io) {
    const usersInCall = this.users;
    console.log('shared interests from Call class', this.sharedInterests);
    io.to(usersInCall[0].socketId).emit("callThisPeer", {
      peerId: usersInCall[1].peerId,
      remoteSocketId: usersInCall[1].socketId,
      sharedInterests: this.sharedInterests
    });
  }
}

module.exports = Call;