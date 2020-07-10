import { Request, Response } from "express";
import { fetchFood } from "@lib/axios";

const getFood = (query: string) => {
  return async (req: Request, res: Response) => {
    try {
      const response = await fetchFood.get(`/json/1/5/DESC_KOR=${query}`);
      console.log("response to food API", response);
      return res.status(200).json(response);
    } catch (error) {
      console.error("error", error);
    }
  };
};

export default getFood;

// const getFood = async (req: Request, res: Response, query: any) => {
//   try {
//     const response = await fetchFood.get("/json/1/5/");
//     console.log("response to food API", response);
//     return res.status(200).json(response);
//   } catch (error) {
//     console.error("error", error);
//   }
// };

// export default getFood;
