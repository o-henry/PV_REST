import axios from "axios";

export const xhrAPI = (url: string, token?: string) => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
