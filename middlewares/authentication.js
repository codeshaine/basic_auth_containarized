const { getUser } = require("../utils/auth");
function validUsersOnly(req, res, next) {
  const cookieSessionId = req.cookies?.sessionId;
  if (!cookieSessionId) return res.redirect("/login");
  const user = getUser(cookieSessionId);

  if (!user) {
    return res.redirect("/login");
  }
  req.user = user;

  next();
}

function checkAuth(req, res, next) {
  const cookieSessionId = req.cookies?.sessionId;
  const user = getUser(cookieSessionId);
  req.user = user;
  next();
}
module.exports = { validUsersOnly, checkAuth };
