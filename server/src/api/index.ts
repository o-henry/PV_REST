import { Router } from "express";

// import food from "@api/controllers/food.controller";
import food from "@controllers/FoodController";

export default () => {
  const app = Router();
  food(app);

  return app;
};
