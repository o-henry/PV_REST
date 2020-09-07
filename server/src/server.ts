import "reflect-metadata";
import "module-alias/register";
import { bootstrapMicroframework } from "microframework-w3tec";

import { expressLoader } from "@loaders/express.loader";
import { typeormLoader } from "@loaders/typeorm.loader";
import Logger from "@loaders/logger.loader";

bootstrapMicroframework({
  loaders: [expressLoader, typeormLoader],
}).catch((error) => Logger.error("LOADER ERROR: ", error));
