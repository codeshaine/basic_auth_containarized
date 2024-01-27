const User = require("../model/user.model");
const { uid } = require("uid/secure");
const { setUser } = require("../utils/auth");
const loginPageRender = (req, res) => {
  res.render("login");
};

const handleUserLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user] = await User.find({ username: username, password: password });
    if (user.length === 0) throw new Error("username not found");
    const sessionId = uid();
    setUser(sessionId, user);

    res.cookie("sessionId", sessionId);
    return res.redirect("/");
  } catch (err) {
    console.error(`Error occured during login:${err}`);
  }
  res.redirect("/login");
};

module.exports = { loginPageRender, handleUserLogin };
