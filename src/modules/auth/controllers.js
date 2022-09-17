const { validateData } = require("../../utils/validator");
const { loginSchemaValidator } = require("./schema");
const { hashPassword, comparePasswords } = require("../../utils/hasher");
const USER = require("../user/models");
const RESPONSE = require("../../utils/response");
const { userSchemaValidator } = require("../user/schema");
const TOKEN = require("../../utils/token");

exports.login = async function (req, res) {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const data = await validateData({ email, password }, loginSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    // checking if user exists
    let user = await USER.get({ email });
    if (!user || !(await comparePasswords(password, user.password))) {
      const error = new Error("incorrect email or password");
      error.code = 400;
      throw error;
    }
    // creating a token
    const token = await TOKEN.createToken({email: user.email, id: user._id});
    const result = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token
    };
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
};

exports.signup = async function (req, res) {
  try {
    const newUser = req.body;
    newUser.email = req.body.email.toLowerCase();
    const data = await validateData(newUser, userSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    newUser.password = await hashPassword(req.body.password);
    // saving user details
    const user = await USER.create(newUser);
    // creating a token
    const token = await TOKEN.createToken({email: user.email, id: user._id});
    const result = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token
    };
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
};