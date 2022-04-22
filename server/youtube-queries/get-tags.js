const { google } = require("@googleapis/youtube");

const getLikedVideoTags = function (auth) {
  const service = google.youtube("v3");
  service.videos.list(
    {
      auth: auth,
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 50
    },
    (err, res) => {
      if (err) {
        console.log("API does not work");
        return;
      }
      // testing
      console.log(res.data.items[7].snippet.tags);
    }
  );
};

module.exports = getLikedVideoTags;