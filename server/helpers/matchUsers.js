const matchUsers = (activeUsers, lobby, Call, io) => {
  // get all the interests current lobby has
  const interestUsing = Object.keys(lobby.usersByInterest);

  const startMatching = () => {
    // check users under each interests
    interestUsing.forEach(interest => {
      const usersHasInterest = lobby.usersByInterest[interest];

      // If that interest has more than 2 users
      if (usersHasInterest && usersHasInterest.size > 1) {
        const usersInCall = [];
        const userArr = usersHasInterest.values();

        // put those two users in a call
        for (let i = 0; i < 2; i++) {
          const user = activeUsers.users[userArr.next().value];
          usersInCall.push(user);
        }
        // use socket.io to send one user the other user's peerId to start call
        const call = new Call(...usersInCall);
        io.to(usersInCall[0].socketId).emit("callThisPeer", {
          peerId: usersInCall[1].peerId,
          sharedInterests: call.sharedInterests
        });

        // remove the two users from lobby
        usersInCall.forEach(user => {
          lobby.removeUser(user);
        });
      }
    });
  };

  // every 5 sec, check whether lobby is empty
  setInterval(() => {
    if (interestUsing.length) {
      startMatching();
    }
  }, 5000);
};

module.exports = matchUsers;
