import expressLoader from "./express";
import typeormLoader from "./typeorm";

import Logger from "./logger";

export default async ({ expressApp }: any) => {
  Logger.info("> Express loaded");
  await expressLoader({ app: expressApp });

  Logger.info("> DB Connected");
  await typeormLoader();
};
