"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register"); // for absolute paths
// import config from "./config";
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(config.port, function () {
    console.log("server running on " + config.port);
});
