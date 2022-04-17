const parseUser = (user, peerId) => ({
  peerId,

  userId : user[0].id,
  email: user[0].email,
  interests: new Set(user.map(row => row.label)),

  isLookingForPeer: false,
  isInCall: false,
  compatibleUsers: {}
});

module.exports = {parseUser};