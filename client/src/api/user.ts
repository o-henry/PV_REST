import { xhrClient } from "@/utils/axios";

export const createUser = async (data: string) => {
  await xhrClient
    .post(`${process.env.REACT_APP_POST_USER}`, data)
    .then((res) => console.log("response", res));
};
