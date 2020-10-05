"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
var microframework_w3tec_1 = require("microframework-w3tec");
var express_loader_1 = require("@loaders/express.loader");
var typeorm_loader_1 = require("@loaders/typeorm.loader");
var logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
microframework_w3tec_1.bootstrapMicroframework({
    loaders: [express_loader_1.expressLoader, typeorm_loader_1.typeormLoader],
}).catch(function (error) { return logger_loader_1.default.error("ENTRY LOADER ERROR: ", error); });
//# sourceMappingURL=server.js.map