class User {
  constructor(userData, peerId) {
    this.peerId = peerId

    this.userId = userData[0].id,
    this.email = userData[0].email,
    this.interests = new Set(userData.map(row => row.label)),

    this.isLookingForPeer = false,
    this.isInCall = false,
    this.compatibleUsers = {}
  }
  _checkIfCompatible (user) {

  }

  removeCompatibleUser (userId) {
    delete this.compatibleUsers[userId];
  }

  addCompatibleUser () {

  }

  toggleIsLooking() {
    this.isLookingForPeer = !this.isInCall;
  }

  toggleIsInCall() {
    this.isInCall = !this.isInCall;
  }
}

module.exports = User;