import { xhrAPI } from "@/utils/axios";

export const createFood = async (query: string) => {
  await xhrAPI(process.env.REACT_APP_API_URL)
    .post(`${process.env.REACT_APP_FOOD}`, {
      name: query,
      // token: localStorage.getItem("token"),
    })
    .then((res) => console.log("response", res));
};
