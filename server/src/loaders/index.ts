import expressLoader from "./express.loader";
import typeormLoader from "./typeorm.loader";

import Logger from "./logger.loader";

export default async ({ expressApp }: any) => {
  Logger.info("> Express loaded");
  await expressLoader({ app: expressApp });

  Logger.info("> DB Connected");
  await typeormLoader();
};
