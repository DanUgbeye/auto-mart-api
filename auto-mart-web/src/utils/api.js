import axios from "axios";

class API {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url,
      timeout: 10000,
    });
  }

  async login(body) {
    const path = "auth/login";
    const user = this.axios
      .post(path, body)
      .then((res) => res.data.data)
      .catch((err) => {
        if (err.response.data.status === "error") {
          throw new Error(err.response.data.message);
        }
        throw err;
      });
    return user;
  }

  async signup(body) {
    const path = "auth/signup";
    const user = this.axios
      .post(path, body)
      .then((res) => res.data.data)
      .catch((err) => {
        if (err.response.data.status === "error") {
          throw new Error(err.response.data.message);
        }
        throw err;
      });
    return user;
  }
}

export default new API("http://localhost:5000");
