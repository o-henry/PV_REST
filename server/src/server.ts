import "module-alias/register";

import config from "@config/index";

import express from "express";

import Logger from "@loaders/logger";

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
