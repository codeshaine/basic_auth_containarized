const express = require("express");
const router = express.Router();
const {
  loginPageRender,
  handleUserLogin,
} = require("../controllers/loginPage.controller");

router.get("/", loginPageRender);
router.post("/submit", handleUserLogin);

module.exports = router;
