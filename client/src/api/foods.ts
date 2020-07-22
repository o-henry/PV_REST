import { xhrClient } from "@/utils/axios";

export const createFood = async (data: string) => {
  await xhrClient
    .post(`${process.env.REACT_APP_POST_FOOD}`, { name: data })
    .then((res) => console.log("response", res));
};
