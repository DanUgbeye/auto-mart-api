const { Router } = require("express");
const { login, signup, logout } = require("./controllers");

const AuthRouter = require("express").Router();

AuthRouter.post("/login", login);
AuthRouter.post("/signup", signup);
// AuthRouter.post("/logout", logout);

module.exports = AuthRouter;