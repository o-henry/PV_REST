import { Application } from "express";
import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";

import config from "@config/index";
import { Authentication } from "@util/Authenticate";

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = createExpressServer({
    cors: true,
    defaultErrorHandler: false,
    classTransformer: true,
    routePrefix: config.api.versioning,

    // specify controllers & middlewares
    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],

    // Authorization features
    currentUserChecker: Authentication.currentUserChecker,
  });

  // run express application on port
  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
  });
};
