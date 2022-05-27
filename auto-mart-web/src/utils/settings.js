class Settings {
    static getPort() {
        return process.env.PORT;
    }
    static getHost() {
        return process.env.HOST;
    }
    static getBaseURL() {
        return "http://localhost:3000";
    }
    
}
export default Settings;

