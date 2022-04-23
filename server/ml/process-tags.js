// TODO:
// ml function
  // make api call
  // extract labels 
  // return parsed labels

const axios = require('axios');
const {URLSearchParams} = require('url');
// const FormData = require('form-data');
const API_KEY = process.env.MEANING_CLOUD_API;
const API_MODEL = 'IAB_2.0-tier4';
const API_URL = 'https://api.meaningcloud.com/deepcategorization-1.0';

const tags = require('../../LOCAL/mock-data');

const parseTags = (tags) => tags.join(', ');

const parseLabel = (label) => {
  
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

const processTags = async(tags) => {
  const parsedTags = parseTags(tags);
  const data = await makeAPICall(parsedTags);
  console.log(data);
};

processTags(tags);

module.exports = processTags;