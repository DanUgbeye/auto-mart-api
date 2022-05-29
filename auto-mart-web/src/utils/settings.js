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
    static getApiURL() {
        return "https://auto-mart-server1.herokuapp.com/";
    }
}
export default Settings;

