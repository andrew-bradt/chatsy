module.exports = (users, compatibleUsers) => {
  const findCompatibleUsers = (user) => {
    console.log('TODO findCompatibleUsers');
    compatibleUsers[user.userId] = {};
  };

  const removeCompatibleUser = (user) => {
    console.log('TODO removeCompatibleUser');
  };
  
  return {
    findCompatibleUsers,
    removeCompatibleUser
  };
};