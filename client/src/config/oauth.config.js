const projectId = "chatsy-347913";
const tokenURI = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";

const authURI = "https://accounts.google.com/o/oauth2/auth";
const redirectURI = 'urn:ietf:wg:oauth:2.0:oob';
const scope = 'https://www.googleapis.com/auth/youtube.readonly';
const responseType = 'code';

// module.exports = `${authURI}?client_id=${clientId}&redirect_uri=${auth_provider_x509_cert_url}&scope=${scope}&response_type=${responseType}`;