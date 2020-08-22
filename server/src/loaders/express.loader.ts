import { Application } from "express";
import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";

import config from "@config/index";

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

export const expressLoader: MicroframeworkLoader = () => {
  // creates express app, registers all controller routes and returns you express app instance
  const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    routePrefix: config.api.versioning,

    // specify controllers & middlewares
    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
  });

  // run express application on port
  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
  });
};
