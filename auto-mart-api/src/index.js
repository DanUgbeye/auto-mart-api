const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Settings = require("./utils/settings");
const { connectDatabase } = require("./utils/database");
const UserRouter = require("./modules/user/router");
const AuthRouter = require("./modules/auth/router");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.route("/").get((req, res) => {
  let url = new URL(`${Settings.getWEB_URI()}/login`);
  res.status(301).redirect(url.href);
});

const Router = express.Router();
Router.use("/auth", AuthRouter);
Router.use("/user", UserRouter);
// Router.use("/car", );

app.use(Router);

connectDatabase()
  .then(() => {
    console.log("database connected successfully");

    const PORT = Settings.getPort() || 5000;
    app.listen(PORT, () => {
      console.log(`app started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
