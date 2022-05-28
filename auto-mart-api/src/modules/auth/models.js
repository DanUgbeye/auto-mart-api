const { model } = require("mongoose");
const { tokenSchema } = require("./schema");

// const tokenModel = model("tokens", tokenSchema);

// class TOKEN {
//   static async get(token) {
//     const result = await tokenModel.findOne({ token });
//     if (!result) {
//       const error = new Error("invalid token");
//       error.code = 400;
//       throw error;
//     }
//     return result;
//   }

//   static async create(tokenObject) {
//     const newToken = new tokenModel(tokenObject);
//     return await newToken.save();
//   }

//   static async delete(token) {
//     const result = await tokenModel.findOneAndDelete({ token });
//     if (!result) {
//       const error = new Error("invalid token");
//       error.code = 400;
//       throw error;
//     }
//     return result;
//   }

//   static async update(oldToken, newToken) {
//     const result = await tokenModel.findOneAndUpdate({oldToken},{ newToken });
//     if (!result) {
//       const error = new Error("invalid token");
//       error.code = 400;
//       throw error;
//     }
//     return result;
//   }
// }

// exports.TOKEN = TOKEN;
