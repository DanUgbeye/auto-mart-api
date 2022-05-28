const { uploadLocal } = require("../../utils/multer");
const { requiresAuth } = require("../auth/middlewares");
const { update, deleteCar, create, get, getForUser, getAll } = require("./controllers");
const Router = require("express").Router();

const CarRouter = (app) => {
  Router.get("/car/:id", get);
  Router.get("/cars/user/:id", requiresAuth, getForUser);
  Router.get("/cars/", requiresAuth, getAll);
  Router.post("/car/", requiresAuth, uploadLocal.single("image"), create);
  Router.patch("/car/:id", requiresAuth, update);
  Router.delete("/car/:id", requiresAuth, deleteCar);
  app.use(Router);
};

module.exports = CarRouter;
