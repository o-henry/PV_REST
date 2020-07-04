import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "@config/index";
import controllers from "@api/index";

// Controllers ( route handlers )
import * as foodsController from "@controllers/food";
import * as speechController from "@controllers/speech";

const expressLoader = async ({ app }: { app: express.Application }) => {
  /* Health Check endpoints */
  app.get("/", async (req, res) => {
    res.status(200).end("Good");
  });

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  app.use(config.api.food, foodsController.getFood);
  app.use(config.api.speech, speechController.getSpeech);

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
};

export default expressLoader;
