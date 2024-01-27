const express = require("express");
const router = express.Router();
const {
  signupPageRender,
  handleUserSignUp,
} = require("../controllers/signupPage.controller");

router.get("/", signupPageRender);
router.post("/submit", handleUserSignUp);

module.exports = router;
