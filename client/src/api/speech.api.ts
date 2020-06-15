import { kakaoAxios } from "@/util/axios";

import axios from "axios";
/**
 * @param Kakao speech recognition api
 */

export const getSpeechModule = async () => {
  await kakaoAxios.post("/v1/recognize").then((res) => console.log("res", res));
};
