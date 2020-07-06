import { Router } from "express";
import food from "@api/controllers/food.controller";

export default () => {
  const app = Router();
  food(app);

  return app;
};
