"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const index_1 = __importDefault(require("@config/index"));
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
routing_controllers_1.useContainer(typedi_1.Container);
exports.expressLoader = () => {
    const app = routing_controllers_1.createExpressServer({
        cors: true,
        classTransformer: true,
        defaultErrorHandler: false,
        routePrefix: index_1.default.api.versioning,
        // specify controllers & middlewares
        controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
        middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
    });
    app.use(express_rate_limit_1.default({
        windowMs: 1 * 60 * 1000,
        max: 50,
    }));
    // run express application on port
    app.listen(index_1.default.port, (err) => {
        logger_loader_1.default.info(`Server Listening on port : ${index_1.default.port}`);
        if (err) {
            logger_loader_1.default.error("SERVER ERROR", err);
        }
    });
};
//# sourceMappingURL=express.loader.js.map