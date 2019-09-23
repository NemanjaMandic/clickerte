import axios from "axios";

const defaultHeaders = {
  "content-type": "application/json",
  accept: "application/json"
};

class Network {
  service = {};

  constructor() {
    const service = axios.create();
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  get(path) {
    return this.service
      .get(path)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  post(path, payload) {
    return this.service
      .request({
        method: "POST",
        url: path,
        withCredentials: true,
        data: payload ? JSON.stringify(payload) : {}
      })
      .then(response => response)
      .catch(error => Promise.reject(error));
  }
}

export default new Network();

// export const get = url => {
//   return axios.get(url);
// };

// export const post = url => {
//   return axios.post(url);
// };
