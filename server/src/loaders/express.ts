import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "@config/index";
import { getFood } from "@api/index";

const expressLoader = ({ app }: { app: express.Application }) => {
  /* Health Check endpoints */
  app.get("/", (req, res) => {
    res.status(200).end("Good");
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  app.use(config.api.prefix, getFood);
};

export default expressLoader;
