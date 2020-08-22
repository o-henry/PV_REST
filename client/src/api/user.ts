import { xhrAPI } from "@/utils/axios";

export const createUser = async (data: any) => {
  await xhrAPI(process.env.REACT_APP_BASE_URL)
    .post(`${process.env.REACT_APP_POST_USER}`, data)
    .then((res) => console.log("response", res))
    .catch((error) => console.error(error));
};
