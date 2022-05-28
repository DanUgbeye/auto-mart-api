const { requiresAuth } = require("../auth/middlewares");
const { update, deleteUser, create, get } = require("./controllers");
const Router = require("express").Router();

const UserRouter = (app) => {
  Router.get("/user/:id", get);
  Router.post("/user/", create);
  Router.patch("/user/:id", requiresAuth, update);
  Router.delete("/user/:id", requiresAuth, deleteUser);
  app.use(Router);
};

module.exports = UserRouter;
