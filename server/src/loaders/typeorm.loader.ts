import "reflect-metadata";
import { MicroframeworkLoader } from "microframework-w3tec";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";

import config from "@config/index";
import Logger from "@loaders/logger.loader";

// TypeDI Service container integration with TypeORM
useContainer(Container);

export const typeormLoader: MicroframeworkLoader = async () => {
  const connectionOptions = {
    type: config.typeorm.connection as any,
    host: config.typeorm.host,
    port: config.typeorm.port,
    username: config.typeorm.username,
    password: config.typeorm.password,
    database: config.typeorm.database,
    entities: ["src/models/*.*"],
    logging: false,
    synchronize: true,
  };

  const connection = await createConnection(connectionOptions);

  try {
    if (connection) {
      Logger.info("DB 연결에 성공하셨습니다.");
    }
  } catch (error) {
    Logger.error("DB 연결 실패", error);
  }
};
