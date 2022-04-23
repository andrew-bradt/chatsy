const { google } = require("googleapis");
const categoryRef = require("./youtube-catId-list");

const getTags = function(auth) {
  const service = google.youtube("v3");
  return service.videos
    .list({
      auth: auth,
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 50
    })
    .then(res => {
      const videoData = res.data.items;
      let userTags = [];
      videoData.forEach(data => {
        const tags = categoryRef[data.snippet.tags];
        tags.forEach(tag => {
          if (!userTags.includes(tag)) {
            userTags.push(tag);
          }
        })
      });
      return userTags;
    });
};

module.exports = getTags;