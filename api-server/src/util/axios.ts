import axios from "axios";

export const xhrAPI = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};
