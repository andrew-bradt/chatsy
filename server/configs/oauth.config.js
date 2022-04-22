const {google} = require('googleapis');
const {OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET} = process.env;

const oauth2Client = new google.auth.OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  'http://localhost:3000'
);

const scope = [
  'https://www.googleapis.com/auth/youtube.readonly',
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

const authURL = oauth2Client.generateAuthUrl({access_type:'online', scope});

module.exports = {authURL, oauth2Client};