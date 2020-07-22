import "reflect-metadata";
import { createConnection } from "typeorm";
import config from "@config/index";
import Logger from "@loaders/logger.loader";

const typeormLoader = async () => {
  const connectionOptions = {
    type: config.typeorm.connection as any,
    host: config.typeorm.host,
    port: config.typeorm.port,
    username: config.typeorm.username,
    password: config.typeorm.password,
    database: config.typeorm.database,
    entities: ["src/models/*.*"],
    synchronize: true,
  };

  const connection = await createConnection(connectionOptions);

  try {
    if (connection) {
      Logger.info("DB 연결에 성공하셨습니다.");
    }
  } catch (error) {
    Logger.error(error);
  }
};

export default typeormLoader;
