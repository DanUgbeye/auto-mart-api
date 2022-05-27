const jwt = require("jsonwebtoken");
const Settings = require("./settings");
const secret = Settings.getTokenSecret();

class TOKEN {
  static async createToken({ email, id }) {
    return jwt.sign({ email, id }, secret, { expiresIn: "10m" });
  }

  static async verifyToken(token) {
    let response;
    try {
      response.value = jwt.verify(token, secret, function(error, payload) {
        if(error) {
          error.code = 400;
          throw error;
        }
        response = payload;
      });
    } catch (error) {
      throw error;
    }
    console.log("response" + response);
    return response;
  }

  static async inValidateToken(token) {
    
  }
}

module.exports = TOKEN;
