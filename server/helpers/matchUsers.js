const Call = require('../entities/Call');

const matchUsers = (activeUsers, lobby, io) => {
  
  const startMatching = () => {
    // check users under each interests
    Object.keys(lobby.usersByInterest).forEach(interest => {
      const usersHasInterest = lobby.usersByInterest[interest];

      // If that interest has more than 2 users
      if (usersHasInterest && usersHasInterest.size > 1) {
        const usersInCall = [];
        const usersHasInterestIter = usersHasInterest.values();
        // put those two users in a call

        // TODO
          // while usersInCall is not length 2, 
          // get the next user in the set and check if they've matched w previous user
          // if they have not, push that user and invoke addMatch
        // const {value: userIdToCompare, done} = usersHasInterestIter.next();
        const {value, done} = usersHasInterestIter.next();
        usersInCall.push(value);
        const userIdLookup = usersInCall[0];

        let userIdToCheck = value;
        let shouldEndLoop = done;

        while ((usersInCall.length !== 2) && !shouldEndLoop) {
          const {value, done} = usersHasInterestIter.next();
          value && !lobby.haveUsersPreviouslyMatched(userIdLookup, value) && usersInCall.push(value);
          shouldEndLoop = done;
        }

        // for (let i = 0; i < 2; i++) {
        //   const user = activeUsers.users[usersHasInterestsIter.next().value];
        //   usersInCall.push(user);
        // }
        // use socket.io to send one user the other user's peerId to start call
        if (usersInCall.length === 2) {
          lobby.addMatch(usersInCall[0], usersInCall[1]);
          console.log(lobby.usersPreviousMatches);
          const pairedUserObjs = usersInCall.map(userId => activeUsers.getUserById(userId));
          const call = new Call(...pairedUserObjs);
          call.start(io);
  
          // remove the two users from lobby
          pairedUserObjs.forEach(user => {
            lobby.removeUser(user);
          });
        }
      }
    });
  };

  // every 5 sec, check whether lobby is empty
  setInterval(() => {
    if (Object.keys(lobby.usersByInterest).length) {
      startMatching();
    }
  }, 5000);
};

module.exports = matchUsers;
