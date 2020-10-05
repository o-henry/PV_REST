"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
var express_1 = __importDefault(require("express"));
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var index_1 = __importDefault(require("@config/index"));
var logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
// its important to set container before any operation you do with routing-controllers,
// including importing controllers
routing_controllers_1.useContainer(typedi_1.Container);
exports.expressLoader = function () {
    var app = express_1.default();
    routing_controllers_1.useExpressServer(app, {
        cors: true,
        classTransformer: true,
        defaultErrorHandler: false,
        routePrefix: index_1.default.api.versioning,
        // specify controllers & middlewares
        controllers: [__dirname + "/../api/controllers/*.[jt]s"],
        middlewares: [__dirname + "/../api/middlewares/*.[jt]s"],
    });
    app.use(express_rate_limit_1.default({
        windowMs: 1 * 60 * 1000,
        max: 50,
    }));
    app.listen(index_1.default.port, function (err) {
        logger_loader_1.default.info("Server Listening on port : " + index_1.default.port);
        if (err) {
            logger_loader_1.default.error("SERVER ERROR", err);
        }
    });
};
//# sourceMappingURL=express.loader.js.map