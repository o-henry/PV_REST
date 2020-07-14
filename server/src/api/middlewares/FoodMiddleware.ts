import { Request, Response, NextFunction } from "express";

import getFood from "@controllers/requests/getFood";

const FoodMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await getFood(encodeURI(req.body.name));
  next();
};

export default FoodMiddleware;
