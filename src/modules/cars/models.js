const { model } = require("mongoose");
const { carSchema, carSchemaValidator } = require("./schema");

const carModel = model("car", carSchema);

class CAR {
  static async create(newCar) {
    const car = new carModel(newCar);
    return await car.save();
  }

  static async get(id) {
    //gets a car using car id
    const car = await carModel.findOne({ _id: id });
    if (!car) {
      const error = new Error("invalid car id");
      error.code = 400;
      throw error;
    }
    return car;
  }

  static async getAll() {
    return await carModel.find();
  }

  static async getForUser(userID) {
    return await carModel.find({ seller: userID });
  }

  static async delete(id) {
    const car = await carModel.findByIdAndDelete({ _id: id });
    if (!car) {
      const error = new Error("invalid car id");
      error.code = 400;
      throw error;
    }    
    return car;
  }
}

module.exports = CAR;
