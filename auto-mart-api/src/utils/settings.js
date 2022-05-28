require("dotenv").config();


/**
 * used to get environment variables
 */
class Settings {
    static getPort() {
        return process.env.PORT;
    }
    static getHost() {
        return process.env.HOST;
    }
    static getDB_URI() {
        return process.env.MONGO_DB_URI;
    }
    static getWEB_URI() {
        return process.env.WEB_URI;
    }
    static getCloudinaryCloudName() {
        return process.env.CLOUDINARY_CLOUD_NAME;
    }
    static getCloudinaryAPISecret() {
        return process.env.CLOUDINARY_API_SECRET;
    }
    static getCloudinaryAPIKey() {
        return process.env.CLOUDINARY_API_KEY;
    }
    static getTokenSecret() {
        return process.env.TOKEN_SECRET;
    }
}
module.exports = Settings;
