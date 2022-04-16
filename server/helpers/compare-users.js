module.exports = (users) => {
  const addCompatibleUser = (userOne, userTwo, interests) => {
    userOne.compatibleUsers[userTwo.userId] = {
      userId: userTwo.userId,
      interests
    };

    userTwo.compatibleUsers[userOne.userId] = {
      userId: userTwo,
      interests
    };
  };

  const getOtherUserIds = (user) => {
    return Object.keys(users)
    .map(id => Number(id))
    .filter(id => id !== user.userId);
  };
    
  const findCompatibleUsers = (user) => {
    const userIds = getOtherUserIds(user);

    for (const userId of userIds) {
      const commonInterests = [];
      
      users[userId].interests.forEach(interest => {
        user.interests.has(interest) && commonInterests.push(interest);
      });

      commonInterests.length > 0 && addCompatibleUser(user, users[userId], commonInterests);
    }
  };

  const removeCompatibleUser = (user) => {
    console.log('TODO removeCompatibleUser');
  };
  
  return {
    findCompatibleUsers,
    removeCompatibleUser
  };
};