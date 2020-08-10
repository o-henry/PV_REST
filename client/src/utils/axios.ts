import axios from "axios";

export const xhrClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  responseType: "json",
});

export const xhrAPI = (url: string, headers?: object) => {
  return axios.create({
    baseURL: url,
    headers: headers || {},
  });
};
