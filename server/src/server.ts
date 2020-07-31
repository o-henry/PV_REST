import "reflect-metadata";

import "module-alias/register";

import express from "express";

import config from "@config/index";

import Logger from "@loaders/logger.loader";

export async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
    }
    Logger.info(`Server listening on port: ${config.port}`);
  });
}

startServer();
