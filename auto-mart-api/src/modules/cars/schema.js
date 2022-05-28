const Joi = require("joi");
const { Schema } = require("mongoose");

exports.carSchema = new Schema({
  seller: String,
  model: String,
  manufacturer: String,
  year: Number,
  price: Number,
  image: String
});

exports.carSchemaValidator = Joi.object().keys({

  seller: Joi.string().required(),

  model: Joi.string().required(),

  manufacturer: Joi.string().required(),

  price: Joi.number().required(),

  year: Joi.number().required(),

  image: Joi.string()

});
