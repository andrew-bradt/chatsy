const { google } = require('googleapis');
// TODO: import ML helper function

const getTags = require('./get-tags');
const checkGoogleUser = async(auth, db) => {
  // import db related queries methods
  const { addUser, updateInterests, updateUsersInterests, updateTags } =
    require("../helpers/queries")(db);

  // call oauth2 api for user email
  const o2 = google.oauth2({
    auth: auth,
    version: "v2"
  });
  const response = await o2.userinfo.get({});
  const userEmail = response.data.email;

  // TODO: getTagsFromApi
  // pass tags into NLP API to get interests
  // add interests to interests table, update users_interests table
  
  // add tags to tags table and update users_tags bridging table
  const tags = await getTags(auth);
  const dbresult = await updateTags(tags);

  let email;

  // return Promise.all([addUser(userEmail), updateInterests(interests)])
  //   .then(res => {
  //     const [user, interests] = res;
  //     const interestIds = interests.map(interest => interest.id);
  //     email = user.email;
  //     return { userId: user.id, interestIds };
  //   })
  //   .then(({ userId, interestIds }) => {
  //     return updateUsersInterests(userId, interestIds);
  //   })
  //   .then(() => {
  //     return email;
  //   });
};

module.exports = checkGoogleUser;