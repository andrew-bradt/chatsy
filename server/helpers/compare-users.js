module.exports = (users) => {
  const getOtherUserIds = (user) => {
    Object.keys(users)
    .map(id => Number(id))
    .filter(id => id !== user.userId);
  };
    
  const findCompatibleUsers = (user) => {
    console.log('TODO findCompatibleUsers');
    const userIds = getOtherUserIds(user);
    
  };

  const removeCompatibleUser = (user) => {
    console.log('TODO removeCompatibleUser');
  };
  
  return {
    findCompatibleUsers,
    removeCompatibleUser
  };
};