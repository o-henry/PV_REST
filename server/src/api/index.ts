import { Router } from "express";

import food from "@controllers/food.controller";
import user from "@controllers/user.controller";

export default () => {
  const app = Router();
  food(app);
  user(app);

  return app;
};
