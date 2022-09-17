const { model } = require("mongoose");
const { validateData } = require("../../utils/validator");
const { userSchema, userSchemaValidator } = require("./schema");

const userModel = model("user", userSchema);

class USER {
  
  static async create(user) {
    try {
      const newUser = new userModel(user);
      return await newUser.save();             
    } catch (error){
      if(error.code = 11000) {
        const duplicateError = new Error("email already exists");
        duplicateError.code = 400;
        throw duplicateError;
      }
    }
  }

  static async get({ email, id }) {
    let query;
    if (email) {
      query = { email };
    } else if (id) {
      query = { _id: id };
    }
    const user = await userModel.findOne(query);
    return user;
  }

  static async update(id, user) {
    return await userModel.findByIdAndUpdate(id, user, {new: true});
  }

  static async delete({ email, id }) {
    let query;
    if (email) {
      query = { email };
    } else if (id) {
      query = { _id: id };
    }
    const user = await userModel.findByIdAndDelete(query);
    if (!user) {
      const error = new Error("invalid user details");
      error.code = 400;
      throw error;
    }
    return user;
  }
}

module.exports = USER;
