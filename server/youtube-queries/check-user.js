const { google } = require('googleapis');
const getInterestsFromApi = require('./get-interests');

const checkGoogleUser = async(auth, db) => {
  // import db related queries methods
  const { addUser, updateInterests, updateUsersInterests } =
    require("../helpers/queries")(db);

  // call oauth2 api for user email
  const o2 = google.oauth2({
    auth: auth,
    version: "v2"
  });
  const response = await o2.userinfo.get({});
  const userEmail = response.data.email;

  // return user email from db, if not in db, will create new user
  const interests = await getInterestsFromApi(auth);

  let email;

  return Promise.all([addUser(userEmail), updateInterests(interests)])
    .then(res => {
      const [user, interests] = res;
      const interestIds = interests.map(interest => interest.id);
      email = user.email;
      return { userId: user.id, interestIds };
    })
    .then(({ userId, interestIds }) => {
      return updateUsersInterests(userId, interestIds);
    })
    .then(() => {
      return email;
    });
};

module.exports = checkGoogleUser;