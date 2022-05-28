const RESPONSE = require("../../utils/response");
const { validateData } = require("../../utils/validator");
const CAR = require("./models");
const { carSchemaValidator } = require("./schema");
const fs = require("fs");
const Settings = require("../../utils/settings");

async function get(req, res) {
  try {
    const id = req.params.id;
    const result = await CAR.get(id);
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(
      error.code ? error.code : 500,
      error.message
    );
    res.status(response.code).send(response);
  }
}

async function getForUser(req, res) {
  try {
    const userID = req.params.id;
    if (req.auth.user.id !== userID) {
      const response = RESPONSE.error(401, "Unauthorized");
      res.status(response.code).send(response);
      return;
    }
    const result = await CAR.getForUser(userID);
    // remove sensitive data before sending
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(
      error.code ? error.code : 500,
      error.message
    );
    res.status(response.code).send(response);
  }
}

async function getAll(req, res) {
  try {
    const result = await CAR.getAll();
    // remove sensitive data before sending
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(
      error.code ? error.code : 500,
      error.message
    );
    res.status(response.code).send(response);
  }
}

async function create(req, res) {
  try {
    const car = req.body;
    if (req.file) {
      if (req.fileValidationError) {
        let error = new Error(req.fileValidationError);
        error.code = 400;
        throw error;
      }
      car.image = `${Settings.getHost()}/${req.file.path}`;
      car.image = car.image.replace("/public", "");
    }

    const data = await validateData(car, carSchemaValidator);
    if (!data.isValid) {
      let error = data.error;
      error.code = 400;
      throw error;
    }
    const result = await CAR.create(data.value);

    const response = RESPONSE.success(201, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    if (req.file) {
      fs.unlink(req.file.path, (error) => {
        if (error) {
          //if an error occurs when deleting the file
          const response = RESPONSE.error(500, error.message);
          res.status(response.code).send(response);
          return;
        }
      });
    }
    const response = RESPONSE.error(
      !error.code ? 500 : error.code,
      error.message
    );
    res.status(response.code).send(response);
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const car = req.body;
    const data = await validateData(car, carSchemaValidator);
    if (!data.isValid) {
      data.error.code = 400;
      throw data.error;
    }
    let existingCar = await CAR.get({ _id: id });

    if (!existingCar) {
      const error = new Error("invalid car id");
      error.code = 400;
      throw error;
    }

    if (req.auth.user.id !== existingCar.seller) {
      const response = RESPONSE.error(401, "Unauthorized");
      res.status(response.code).send(response);
      return;
    }
    const { _id, seller, year, price, model, manufacturer } = await CAR.update(
      existingCar._id,
      car
    );
    const result = {
      _id,
      seller,
      year,
      price,
      model,
      manufacturer,
    };
    const response = RESPONSE.success(200, result);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(
      error.code ? error.code : 500,
      error.message
    );
    res.status(response.code).send(response);
  }
}

async function deleteCar(req, res) {
  try {
    const id = req.params.id;
    const result = await CAR.delete(id);
    const response = RESPONSE.success(200);
    res.status(response.code).send(response);
    return;
  } catch (error) {
    const response = RESPONSE.error(
      error.code ? error.code : 500,
      error.message
    );
    res.status(response.code).send(response);
  }
}

module.exports = { get, getAll, getForUser, create, update, deleteCar };
