const Tweet = require("../model/tweet.model");

const homePageDataRetrievalController = async (req, res) => {
  if (!req.user) return res.redirect("/login");
  let tweets;

  try {
    tweets = await Tweet.find({ createdBy: req.user._id });
  } catch (err) {
    console.error(`Error occured while retrieving all the data:${err}`);
  }
  res.render("home.ejs", (data = tweets));
};

module.exports = homePageDataRetrievalController;
