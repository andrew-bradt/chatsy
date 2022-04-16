const parseUser = (user) => ({
  userId : user[0].id,
  email: user[0].email,
  interests: user.map(row => row.label)
});

module.exports = parseUser;