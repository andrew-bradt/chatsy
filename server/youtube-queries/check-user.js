const { google } = require('googleapis');
const getInterestsFromApi = require('./get-interests');

const checkGoogleUser = async(auth, db) => {
  // import db related queries methods
  const {addUser} = require('../helpers/queries')(db);

  // call oauth2 api for user email
  const o2 = google.oauth2({
    auth: auth,
    version: "v2"
  });
  const response = await o2.userinfo.get({});
  const userEmail = response.data.email;
  
  getInterestsFromApi(auth);

  // return user email from db, if not in db, will create new user
  const dbRes = await addUser(userEmail);

  return dbRes.email;

};

module.exports = checkGoogleUser;