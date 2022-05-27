const Settings = require("../../utils/settings");
const TOKEN = require("../../utils/token");

exports.requiresAuth = async function (req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const user = await TOKEN.verifyToken(token);
    console.log('value  ' + user)
    if(error != null) throw error;
    req.user = user;
    next();
  } catch (error) {
    // redirect to login page
    let url = new URL(`${Settings.getWEB_URI()}/login`);
    res.status(301).redirect(url.href);
  }
};
