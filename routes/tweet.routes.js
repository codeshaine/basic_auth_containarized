const express = require("express");
const router = express.Router();
const { tweetPost } = require("../controllers/tweet.controller");

router.post("/post", tweetPost);

module.exports = router;
