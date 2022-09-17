const Router = require("express").Router();
const { login, signup, logout } = require("./controllers");

const AuthRouter = (app) => {
  Router.post("/auth/login", login);
  Router.post("/auth/signup", signup);
  app.use(Router);
};

module.exports = AuthRouter;
