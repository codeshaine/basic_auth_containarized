const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
