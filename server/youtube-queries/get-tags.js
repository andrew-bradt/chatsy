const { google } = require("googleapis");

const getTags = function(auth) {
  const service = google.youtube("v3");
  return service.videos
    .list({
      auth: auth,
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 10
    })
    .then(res => {
      const videoData = res.data.items;
      let userTags = [];
      videoData.forEach(data => {
        const tags = data.snippet.tags;
        if (tags && tags.length) {
          tags.forEach(tag => {
            if (!userTags.includes(tag) && !tag.includes("'")) {
              userTags.push(tag);
            }
          });
        }
      });
      return userTags;
    });
};

module.exports = getTags;