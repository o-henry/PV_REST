import express, { Application } from "express";
import { Container } from "typedi";
import {
  createExpressServer,
  useContainer,
  useExpressServer,
} from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";
import csrf from "csurf";
import cookieParser from "cookie-parser";

import config from "@config/index";
import { Authentication } from "@util/Authenticate";

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = express();

  // protect CSRF attacks.
  const csrfProtection = csrf({
    cookie: true,
  });

  app.use(cookieParser());

  app.use(csrfProtection);

  app.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.json({});
  });

  useExpressServer(app, {
    cors: true,
    classTransformer: true,
    routePrefix: config.api.versioning,

    // specify controllers & middlewares
    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],

    // Authorization features
    currentUserChecker: Authentication.currentUserChecker,
  });

  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
  });
};

// // creates express app, registers all controller routes and returns you express app instance
// const app: express.Application = createExpressServer({
//   cors: true,
//   classTransformer: true,
//   routePrefix: config.api.versioning,

//   // specify controllers & middlewares
//   controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
//   middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],

//   // Authorization features
//   currentUserChecker: Authentication.currentUserChecker,
// });

// // run express application on port
// app.listen(config.port, (err) => {
//   console.log(`Server Listening on port : ${config.port}`);
// });
