import "reflect-metadata";

import "module-alias/register";

import { bootstrapMicroframework } from "microframework-w3tec";

import { expressLoader } from "@loaders/express.loader";
import { typeormLoader } from "@loaders/typeorm.loader";

// export async function startServer() {
//   const app = express();

//   await require("./loaders").default({ expressApp: app });

//   app.listen(config.port, (err) => {
//     if (err) {
//       Logger.error(err);
//     }
//     Logger.info(`Server listening on port: ${config.port}`);
//   });
// }

// startServer();

bootstrapMicroframework({
  loaders: [expressLoader, typeormLoader],
}).catch((error) => console.log(error));
