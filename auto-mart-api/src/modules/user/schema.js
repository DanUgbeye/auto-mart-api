const Joi = require("joi");
const { Schema } = require("mongoose");

exports.userSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

exports.userSchemaValidator = Joi.object().keys({
  fullName: Joi.string().required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  password: Joi.string().min(6).required(),

  confirmPassword: Joi.ref("password"),
});

exports.updateUserSchemaValidator = Joi.object().keys({
  fullName: Joi.string(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  newPassword: Joi.string().min(6),

  newPassword: Joi.string().min(6),

  confirmPassword: Joi.ref("newPassword"),
});
