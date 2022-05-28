const { hashPassword, comparePasswords } = require("../../utils/hasher");
const RESPONSE = require("../../utils/response");
const { validateData } = require("../../utils/validator");
const USER = require("./models");
const { userSchemaValidator, updateUserSchemaValidator } = require("./schema");

async function get(req, res) {
  try {
    const id = req.params.id;
    const { _id, fullName, email } = await USER.get({ id });
    // remove sensitive data before sending
    const result = {
      id: _id,
      email,
      fullName
    }
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
    const data = await validateData(user, updateUserSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    let existingUser = await USER.get({ _id: id });
    if (!existingUser) {
      const error = new Error("invalid user ID");
      error.code = 400;
      throw error;
    }
    const updatedUser = {
      fullName: user.fullName,
    }
    if(user.currentPassword || user.newPassword || user.confirmPassword) {
      if(!user.currentPassword || !user.newPassword || !user.confirmPassword) {
        const error = new Error("fill in all password fields");
        error.code = 400;
        throw error;
      }
      if (!await comparePasswords(user.currentPassword, existingUser.password) ) {
        const error = new Error("incorrect password");
        error.code = 401;
        throw error;
      }
      if (await comparePasswords(user.newPassword, existingUser.password) ) {
        const error = new Error("old and new passwords must not match");
        error.code = 400;
        throw error;
      }
      if ( user.newPassword !== user.confirmPassword ) {
        const error = new Error("new password and confirm password must match");
        error.code = 400;
        throw error;
      }
      updatedUser.password = user.newPassword;
    }
    
    const { _id, fullName, email } = await USER.update(id, updatedUser);
    const result = {
      id: _id,
      fullName,
      email
    }
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
