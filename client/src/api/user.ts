import { xhrAPI } from "@/utils/axios";

export const createUser = async (data: any) => {
  await xhrAPI(process.env.REACT_APP_BASE_URL)
    .post(`${process.env.REACT_APP_AUTH_SIGNUP}`, data)
    .then((res) => console.log("response signup", res))
    .catch((error) => console.error("error", error));
};

export const loginUser = async (data: any) => {
  await xhrAPI(process.env.REACT_APP_BASE_URL)
    .post(`${process.env.REACT_APP_AUTH_LOGIN}`, data)
    .then((res) => console.log("response login", res))
    .catch((error) => console.error("error", error));
};
