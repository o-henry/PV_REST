import axios from "axios";

export const xhrAPI = (url: string, headers?: object) => {
  return axios.create({
    baseURL: url,
    headers: headers || {},
  });
};
