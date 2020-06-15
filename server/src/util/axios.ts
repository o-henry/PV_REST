import axios from "axios";
import config from "@config/index";

export const fetchFood = axios.create({
  baseURL: `${config.foods.url}/${config.foods.keyId}/${config.foods.serviceId}`,
});

export const fetchKakao = axios.create({
  baseURL: process.env.KAKAO_URL,
  headers: {
    "Content-Type": "application/octet-stream",
    "Transfer-Encoding": "chunked",
    Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
  },
});
