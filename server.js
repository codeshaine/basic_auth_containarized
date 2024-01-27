const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");

//router import
const homeRoutes = require("./routes/homePage.routes.js");
const loginRoutes = require("./routes/loginPage.routes.js");
const signupRoutes = require("./routes/signupPage.routes.js");
const tweetRoutes = require("./routes/tweet.routes.js");

// express middlewares
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database
const dbConnect = require("./db/mongo.js");
dbConnect();

//custom middlewares
const {
  validUsersOnly,
  checkAuth,
} = require("./middlewares/authentication.js");
// app.use(validUsersOnly);
//rotes

app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/tweet", validUsersOnly, tweetRoutes);
app.use("/", checkAuth, homeRoutes);

//port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server running:http://localhost:" + port));
