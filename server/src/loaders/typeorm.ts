import "reflect-metadata";
import { createConnection } from "typeorm";
import config from "@config/index";

const typeormLoader = async () => {
  const connectionOptions = {
    type: config.typeorm.connection as any,
    host: config.typeorm.host,
    port: config.typeorm.port as number | undefined,
    username: config.typeorm.username,
    password: config.typeorm.password,
    database: config.typeorm.database,
    entities: ["models/*.*"],
    synchronize: true,
    debug: true,
  };

  const connection = await createConnection(connectionOptions);
  console.log(connection);
};

export default typeormLoader;
