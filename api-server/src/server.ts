import "reflect-metadata";
import "module-alias/register";
import { bootstrapMicroframework } from "microframework-w3tec";

import { expressLoader } from "@loaders/express.loader";
import Logger from "@loaders/logger.loader";

bootstrapMicroframework({
  loaders: [expressLoader],
}).catch((error) => Logger.error("ENTRY LOADER ERROR: ", error));
