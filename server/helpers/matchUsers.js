const matchUsers = (activeUsers, lobby, socket) => {
  const interestUsing = Object.keys(lobby.usersByInterest);

  const startMatching = () => {
    interestUsing.forEach(interest => {
      const usersHasInterest = lobby.usersByInterest[interest];

      if (usersHasInterest.size > 1) {
        usersHasInterest.forEach(userId => {
          console.log(activeUsers.users[userId].peerId)
        })
      }
    });
  };

  setInterval(() => {
    if (interestUsing.length) {
      startMatching();
    }
  }, 5000);
};

module.exports = matchUsers;
