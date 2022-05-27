const { requiresAuth } = require("../auth/middlewares");
const { update, deleteUser, create, get } = require("./controllers");

const UserRouter = require("express").Router();

UserRouter.get("/:id", get);
UserRouter.post("/", create);

UserRouter.use(requiresAuth);
UserRouter.patch("/:id", update);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;
