"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const microframework_w3tec_1 = require("microframework-w3tec");
const express_loader_1 = require("@loaders/express.loader");
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
microframework_w3tec_1.bootstrapMicroframework({
    loaders: [express_loader_1.expressLoader],
}).catch((error) => logger_loader_1.default.error("ENTRY LOADER ERROR: ", error));
//# sourceMappingURL=server.js.map