const { google } = require("googleapis");

const getInterestsFromApi = function(auth) {
  const service = google.youtube("v3");
  service.videos.list(
    {
      auth: auth,
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 20,
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

module.exports = getInterestsFromApi;