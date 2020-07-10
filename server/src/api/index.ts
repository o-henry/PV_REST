import { Router } from "express";
import food from "@api/controllers/FoodController";

export default () => {
  const app = Router();
  food(app);

  return app;
};
