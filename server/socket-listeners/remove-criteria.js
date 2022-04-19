module.exports = (lobby) => (interest, userId) => {
  lobby.removeUserInterest(interest, userId);
};