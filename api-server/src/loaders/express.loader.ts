import { Application } from "express";
import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";
import rateLimit from "express-rate-limit";

import config from "@config/index";
import Logger from "@loaders/logger.loader";

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

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 50,
    })
  );

  app.get("/", (req, res) => {
    res.send("RESPONSE TEST");
  });

  // run express application on port
  app.listen(config.port, (err: any) => {
    Logger.info(`Server Listening on port : ${config.port}`);
    if (err) {
      Logger.error("SERVER ERROR", err);
    }
  });
};
