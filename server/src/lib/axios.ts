import axios from "axios";
import config from "@config/index";

export const xhrAPI = (url: string, headers?: object) => {
  return axios.create({
    baseURL: url,
    headers: headers || {},
  });
};

/* Fetch Food DB */
export const fetchFood = axios.create({
  baseURL: `${config.foods.url}`,
});

/* Fetch Kakao API */
export const fetchKakao = axios.create({
  baseURL: process.env.KAKAO_URL,
  headers: {
    "Content-Type": "application/octet-stream",
    "Transfer-Encoding": "chunked",
    Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
  },
});
