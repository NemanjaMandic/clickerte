import axios from "axios";

export const get = url => {
  return axios.get(url);
};

export const post = url => {
  return axios.post(url);
};
