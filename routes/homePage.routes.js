const express = require("express");
const router = express.Router();
const homePageDataRetrieval = require("../controllers/homePage.controller.js");

router.get("/", homePageDataRetrieval);

module.exports = router;
