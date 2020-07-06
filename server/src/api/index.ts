import { Router } from "express";
import food from "@api/controllers/food.controller";
import docs from "@api/controllers/docs.controller";

export default () => {
  const app = Router();
  food(app);
  docs(app);

  return app;
};
