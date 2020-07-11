import { Request, Response, NextFunction } from "express";
import getFood from "@controllers/requests/getFood";

const FoodMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("=========REQUEST=========", req.body.name);
  await getFood(req.body.name);
  next();
};

export default FoodMiddleware;
