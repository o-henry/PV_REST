import "module-alias/register"; // for absolute paths

import config from "./config";

import express from "express";

const app = express();

app.listen(config.port, () => {
  console.log(`server running on ${config.port}`);
});
