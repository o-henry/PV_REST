import { Request, Response } from "express";
import { fetchFood } from "@lib/axios";

const getFood = async (req: Request, res: Response) => {
  try {
    const response = await fetchFood.get("/json/1/5");
    console.log("response", response);
    return res.status(200).json(response);
  } catch (error) {
    console.error("error", error);
  }
};

export default getFood;
