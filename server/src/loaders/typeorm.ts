import { createConnection, Connection, getConnectionOptions } from "typeorm";
import config from "@config/index";

const typeormLoader = async () => {
  // const loadedConnectionOptions = await getConnectionOptions();
  // const connectionOptions = Object.assign(loadedConnectionOptions, {
  //   type: config.typeorm.connection,
  //   host: config.typeorm.host,
  //   port: config.typeorm.port,
  //   username: config.typeorm.username,
  //   password: config.typeorm.password,
  //   database: config.typeorm.database,
  // });
  // const connection: Connection = await createConnection(connectionOptions);
  // return connection;
};

export default typeormLoader;
