const { google } = require("googleapis");
const categoryRef = require("./youtube-catId-list");

const getInterestsFromApi = function(auth) {
  const service = google.youtube("v3");
  service.videos.list(
    {
      auth: auth,
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 50,
    },
    (err, res) => {
      if (err) {
        console.log("API does not work");
        return;
      }
      // console.log(res.data.items[7].snippet);
      const videoData = res.data.items;
      let userInterest = [];
      videoData.forEach(data => {
        const interest = categoryRef[data.snippet.categoryId];
        if (!userInterest.includes(interest)) {
          userInterest.push(interest);
        }
      });
      return userInterest;
    }
  );
};

module.exports = getInterestsFromApi;