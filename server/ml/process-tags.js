// TODO:
// ml function
  // accepts array of tags
  // parse to string
  // make api call
  // extract labels 
  // return parsed labels

const axios = require('axios');
const FormData = require('form-data');
const tags = require('../../LOCAL/mock-data');

const parseTags = (tags) => tags.join(', ');

const parseLabel = (label) => {
  
};

const API_KEY = process.env.MEANING_CLOUD_API;

const processTags = (tags) => {
  const parsedTags = parseTags(tags);
  console.log(parsedTags);
};

processTags(tags);

module.exports = processTags;