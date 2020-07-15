import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from "@config/index";
import controllers from "@api/index";

const expressLoader = async ({ app }: { app: express.Application }) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  /* Health Check endpoints */
  app.get("/", async (req, res) => {
    res.status(200).end("Good");
  });

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Load API routes
  app.use(config.api.versioning, controllers());
};

export default expressLoader;
