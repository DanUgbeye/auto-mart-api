const Joi = require("joi");
const {Schema} = require("mongoose");

exports.loginSchemaValidator = Joi.object().keys({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .min(6)
        .required()
});

// exports.tokenSchema = new Schema({
//     token: String,
//     userID: String,
//     expires: Date
// });

// exports.tokenSchemaValidator = Joi.object().keys({
//     token: Joi.string()
//         .required(),

//     userID: Joi.string()
//         .required(),

//     expires: Joi.date().required()
// });



