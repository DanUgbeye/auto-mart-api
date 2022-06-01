const Joi = require("joi");
const { Schema } = require("mongoose");

exports.carSchema = new Schema({
  seller: String,
  model: String,
  manufacturer: String,
  year: Number,
  price: Number,
  image: {
    path: String,
    filename: String
  }
});

exports.carSchemaValidator = Joi.object().keys({

  seller: Joi.string().required(),

  model: Joi.string().required(),

  manufacturer: Joi.string().required(),

  price: Joi.number().required(),

  year: Joi.number().required(),

  image: Joi.object().keys({
    path: Joi.string().required(),
    filename: Joi.string().required()
  })

});
