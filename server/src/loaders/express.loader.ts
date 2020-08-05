import { createExpressServer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";
import { Application } from "express";

import config from "@config/index";

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = createExpressServer({
    cors: true,
    routePrefix: config.api.versioning,

    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
  });

  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
  });
};
