const { google } = require('googleapis');

const checkGoogleUser = async (auth, db) => {
  
  const {getUserId} = require('../helpers/queries')(db);

  const o2 = google.oauth2({
    auth: auth,
    version: "v2"
  });

  const response = await o2.userinfo.get({});
  const userEmail = response.data.email;

  const userId = await getUserId(userEmail);
  console.log(userId);

};

module.exports = checkGoogleUser;