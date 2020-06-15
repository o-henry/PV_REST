import axios from "axios";

export const kakaoAxios = axios.create({
  baseURL: process.env.KAKAO_URL,
  headers: {
    "Content-Type": "application/xml",
    Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
  },
});
