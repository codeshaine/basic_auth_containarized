const Tweet = require("../model/tweet.model");

const tweetPost = async (req, res) => {
  const tweet = req.body.tweet;
  try {
    const data = await Tweet.create({
      tweet: tweet,
      createdBy: req.user._id,
    });

    console.log(`inserted successfully:${data}`);
  } catch (err) {
    console.error(`New tweet creation error:${err}`);
  }
  res.redirect("/");
};

module.exports = { tweetPost };
