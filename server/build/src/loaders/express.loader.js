"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const express_1 = __importDefault(require("express"));
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const index_1 = __importDefault(require("@config/index"));
const Authenticate_1 = require("@auth/Authenticate");
// its important to set container before any operation you do with routing-controllers,
// including importing controllers
routing_controllers_1.useContainer(typedi_1.Container);
exports.expressLoader = () => {
    const app = express_1.default();
    routing_controllers_1.useExpressServer(app, {
        cors: true,
        classTransformer: true,
        defaultErrorHandler: false,
        routePrefix: index_1.default.api.versioning,
        // Authorization features
        currentUserChecker: Authenticate_1.Authentication.currentUserChecker,
        authorizationChecker: async (action, roles) => {
            throw new routing_controllers_1.UnauthorizedError("You're not authorized");
        },
        // specify controllers & middlewares
        controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
        middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
    });
    app.listen(index_1.default.port, (err) => {
        console.log(`Server Listening on port : ${index_1.default.port}`);
    });
};
//# sourceMappingURL=express.loader.js.map