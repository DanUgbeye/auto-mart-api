const { hashPassword } = require("../../utils/hasher");
const RESPONSE = require("../../utils/response");
const { validateData } = require("../../utils/validator");
const USER = require("./models");
const { userSchemaValidator } = require("./schema");

async function get(req, res) {
  try {
    const id = req.params.id;
    const result = await USER.get({ id });
    // remove sensitive data before sending
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
}

async function create(req, res) {
  try {
    const user = req.body;
    const data = validateData(user, userSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    const result = await USER.create(data.value);
    // remove sensitive data before sending
    const response = RESPONSE.success(201, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const user = req.body;
    const password = req.body.password;
    user.password = await hashPassword(password);
    const data = await validateData(user, userSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    let existingUser = !id ? await USER.get({ email: user.email }) : await USER.get({ _id: id });
    // console.log("user : " + JSON.stringify(existingUser))
    if (!existingUser) {
      const error = new Error("invalid email");
      error.code = 400;
      throw error;
    }
    const { _id, fullName, email } = await USER.update(existingUser._id, user);
    const result = {
      _id,
      fullName,
      email,
    };
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const result = await USER.delete({ id });
    const response = RESPONSE.success(200);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(error.code ? error.code : 500, error.message);
    res.status(response.code).send(response);
  }
}

module.exports = UserController = { get, create, update, deleteUser };
