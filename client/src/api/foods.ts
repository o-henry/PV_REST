import { xhrClient } from "@/lib/axios";

export const createFood = async (data: string) => {
  await xhrClient.post("/v1/foods", { name: data });
};
