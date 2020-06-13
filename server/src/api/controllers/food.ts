import { Request, Response } from "express";
import axios from "axios";
import config from "@config/index";

const options = {
  headers: {
    Authoriazation: config.foods.key,
  },
};

/**
 * @GET /
 * Food
 */

export const getFood = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(config.foods.url);
    console.log("res", response);
    return res.status(200).send(response);
  } catch (error) {
    console.error("error", error);
  }
};
