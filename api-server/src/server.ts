import "reflect-metadata";
import "module-alias/register";
import { bootstrapMicroframework } from "microframework-w3tec";

import { expressLoader } from "@loaders/express.loader";

bootstrapMicroframework({
  loaders: [expressLoader],
});
