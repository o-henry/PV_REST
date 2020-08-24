import { Application } from "express";
import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";

import config from "@config/index";

useContainer(Container);

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
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
