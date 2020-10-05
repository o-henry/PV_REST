import express, { Application } from "express";
import { Container } from "typedi";
import { useContainer, useExpressServer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";
import rateLimit from "express-rate-limit";

import config from "@config/index";
import Logger from "@loaders/logger.loader";

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = express();

  useExpressServer(app, {
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    routePrefix: config.api.versioning,

    // specify controllers & middlewares
    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
  });

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 50,
    })
  );

  app.listen(config.port, (err) => {
    Logger.info(`Server Listening on port : ${config.port}`);
    if (err) {
      Logger.error("SERVER ERROR", err);
    }
  });
};
