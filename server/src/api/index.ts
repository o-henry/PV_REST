import { Router } from "express";
import food from "@controllers/food";

export default () => {
  const app = Router();
  food(app);

  return app;
};
