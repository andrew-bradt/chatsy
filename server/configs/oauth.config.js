const {auth} = require('@googleapis/youtube');
const {OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET} = process.env;

const oauth2Client = new auth.OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  // 'http://localhost:3000'
  'http://localhost:8080'
);

const scope = 'https://www.googleapis.com/auth/youtube.readonly';

const authURL = oauth2Client.generateAuthUrl({access_type:'online', scope});

module.exports = {authURL};