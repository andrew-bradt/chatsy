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

module.exports = (users) => {
  const getOtherUserIds = (userId) => {
    return Object.keys(users)
    .map(id => Number(id))
    .filter(id => id !== userId);
  };
    
  const findCompatibleUsers = (user) => {
    const userIds = getOtherUserIds(user.userId);

    for (const userId of userIds) {
      const commonInterests = [];

      users[userId].interests.forEach(interest => {
        user.interests.has(interest) && commonInterests.push(interest);
      });

      commonInterests.length > 0 && addCompatibleUser(user, users[userId], commonInterests);
    }
  };

  const removeCompatibleUser = (userId) => {
    const otherUserIds = getOtherUserIds(userId);
    for (const otherUserId of otherUserIds) {
      delete users[otherUserId].compatibleUsers[userId];
    }
  };
  
  return {
    findCompatibleUsers,
    removeCompatibleUser
  };
};