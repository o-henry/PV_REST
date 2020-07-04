import { Router } from "express";
import * as foodsController from "@controllers/food";
import * as speechController from "@controllers/speech";

export default () => {
  const app = Router();
  foodsController(app);
  speechController(app);
};
