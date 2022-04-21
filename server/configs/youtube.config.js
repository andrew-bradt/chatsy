const youtube = require('@googleapis/youtube');
const {OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET} = process.env;

const oauth2Client = new youtube.auth.OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  'http://localhost:3000'
);

const scope = 'https://www.googleapis.com/auth/youtube.readonly';

module.exports = oauth2Client.generateAuthUrl({access_type:'online', scope});