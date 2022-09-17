const Settings = require('./settings');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: Settings.getCloudinaryCloudName(), 
  api_key: Settings.getCloudinaryAPIKey(), 
  api_secret: Settings.getCloudinaryAPISecret()
});

module.exports = { cloudinary }