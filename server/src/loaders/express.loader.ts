// import { Application } from "express";
// import bodyParser from "body-parser";
// import cors from "cors";

// import config from "@config/index";
// import controllers from "@api/index";

// const expressLoader = async ({ app }: { app: Application }) => {
//   // Enable Cross Origin Resource Sharing to all origins by default
//   app.use(cors());

//   /* Health Check endpoints */
//   app.get("/", async (req, res) => {
//     res.status(200).end("Good");
//   });

//   // Middleware that transforms the raw string of req.body into json
//   app.use(bodyParser.json());

//   // Load API routes
//   app.use(config.api.versioning, controllers());
// };

// export default expressLoader;

import { createExpressServer } from "routing-controllers";
import { MicroframeworkLoader } from "microframework-w3tec";

import { Application } from "express";

import config from "@config/index";

export const expressLoader: MicroframeworkLoader = () => {
  const app: Application = createExpressServer({
    cors: true,
    routePrefix: config.api.versioning,

    controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
    middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
  });

  app.listen(config.port, (err) => {
    console.log(`Server Listening on port : ${config.port}`);
  });
};
