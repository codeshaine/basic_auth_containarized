const User = require("../model/user.model");

const signupPageRender = (req, res) => {
  res.render("signup.ejs", {});
};

const handleUserSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const ifExist = await User.find({ username });
    if (ifExist.length === 0) {
      const data = await User.create({
        username,
        email,
        password,
      });

      return res.redirect("/login");
    }
  } catch (err) {
    console.error(`Error occured while signing up:${err}`);
  }
  res.redirect("/signup");
};
module.exports = { signupPageRender, handleUserSignUp };
