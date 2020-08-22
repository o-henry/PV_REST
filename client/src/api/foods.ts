import { xhrAPI } from "@/utils/axios";

export const createFood = async (query: string) => {
  await xhrAPI(process.env.REACT_APP_BASE_URL)
    .post(`${process.env.REACT_APP_FOOD}`, { name: query })
    .then((res) => console.log("response", res));
};
