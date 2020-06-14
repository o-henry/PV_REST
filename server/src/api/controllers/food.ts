import { Request, Response } from "express";
import axios from "axios";
import config from "@config/index";

/**
 * @param GET /
 * Food
 */

export const getFood = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${config.foods.url}/${config.foods.keyId}/${config.foods.serviceId}/json/1/5`
    );
    console.log("res", response);
    return res.status(200).json(response);
  } catch (error) {
    console.error("error", error);
  }
};
