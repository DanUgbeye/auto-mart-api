const Settings = require("../../utils/settings");
const TOKEN = require("../../utils/token");

exports.requiresAuth = async function (req, res, next) {
  try {
    const { authorization } = req.headers;
    if(!authorization) throw Error("no authorization found");
    const token = authorization.split(" ")[1];
    if(!token) throw Error("no authorization token");
    const user = await TOKEN.verifyToken(token);
    req.auth = {
      isAuthenticated: true,
      user
    };
    next();
  } catch (error) {
    // redirect to login page
    let url = new URL(`${Settings.getWEB_URI()}/login`);
    res.status(301).redirect(url.href);
  }
};

exports.checkAuth = async function (req, res, next) {
  let isAuthenticated;
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    if (!token) {
      isAuthenticated = false;
    }
    const user = await TOKEN.verifyToken(token);
  } catch (error) {
    isAuthenticated = false;
  }
  req.auth = {isAuthenticated};
  next();
};
