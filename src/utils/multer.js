const multer = require("multer");
const {cloudinary} = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const uuid = require('uuid').v4;

//this handles the destination and filename for saving the file
const localStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads/cars");
  },

  filename: (req, file, callback) => {
    callback(
      null,
      `${file.originalname.split(".")[0].replaceAll(" ", "_")}.${
        file.extension
      }`
    );
  },
});

//saves directly to cloudinary from multer
const cloudStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: () => "auto-mart",
    public_id: (req, file) => file.publicName,
    format: (req, file) => file.extension,
    resource_type: "image",
    width: 500,
    height: 450,
    crop: "limit",
  },
});

//this checks the uploaded filetype
const imageFilter = (req, file, callback) => {
  let photoExt;
  if (file.mimetype) {
    //checking the file extension to append the appropriate one to filename
    switch (file.mimetype) {
      case "image/png":
        photoExt = "png";
        break;
      case "image/jpg":
        photoExt = "jpg";
        break;
      case "image/gif":
        photoExt = "gif";
        break;
      case "image/jpeg":
        photoExt = "jpeg";
        break;
      default:
        photoExt = null;
    }
  }

  if (!photoExt) {
    //set a validation error on the incoming request
    req.fileValidationError = "wrong file type, select only images!";
    callback(null, false);
  } else {
    file.extension = photoExt;
    file.publicName = `${Date.now()}_${req.auth.user.id}_${
      req.body.manufacturer + "_" + req.body.model
    }`;
    callback(null, true);
  }
};

const uploadLocal = multer({ storage: localStorage, fileFilter: imageFilter });

const uploadCloud = multer({ storage: cloudStorage, fileFilter: imageFilter });

module.exports = { uploadLocal, uploadCloud };

