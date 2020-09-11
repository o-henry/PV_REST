import express, { Application } from "express";
import { Container } from "typedi";
import { useContainer, useExpressServer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";

import config from "@config/index";

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

  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
    if (err) {
      console.log("SERVER ERROR", err);
    }
  });
};
