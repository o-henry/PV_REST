import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "@config/index";

// Controllers ( route handlers )
import * as foodsController from "@controllers/food";

const expressLoader = async ({ app }: { app: express.Application }) => {
  /* Health Check endpoints */
  app.get("/", async (req, res) => {
    res.status(200).end("Good");
  });

  app.use(config.api.prefix, foodsController.getFood);

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
};

export default expressLoader;
