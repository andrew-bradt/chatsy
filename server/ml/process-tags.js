const axios = require('axios');
const {URLSearchParams} = require('url');

const API_KEY = process.env.MEANING_CLOUD_API;
const API_MODEL = 'IAB_2.0-tier4';
const API_URL = 'https://api.meaningcloud.com/deepcategorization-1.0';

const parseTags = (tags) => tags.join(', ');

const parseLabel = (label) => {
  if (!label.includes('>')) return label;
  return label.split('>').pop();
};

const makeAPICall = (tags) => {
  const params = new URLSearchParams({
    key: API_KEY,
    txt: tags,
    model: API_MODEL
  });

  return axios.post(API_URL, params.toString())
    .then(res => {
      return res.data.category_list;
    });
}

module.exports = async(tags) => {
  const parsedTags = parseTags(tags);
  const interests = await makeAPICall(parsedTags);
  return interests.map(el => parseLabel(el.label));
};