"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = void 0;
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const index_1 = __importDefault(require("@config/index"));
routing_controllers_1.useContainer(typedi_1.Container);
exports.expressLoader = () => {
    const app = routing_controllers_1.createExpressServer({
        cors: true,
        classTransformer: true,
        routePrefix: index_1.default.api.versioning,
        // specify controllers & middlewares
        controllers: [`${__dirname}/../api/controllers/*.[jt]s`],
        middlewares: [`${__dirname}/../api/middlewares/*.[jt]s`],
    });
    // run express application on port
    app.listen(index_1.default.port, (err) => {
        console.log(`Server Listening on port : ${index_1.default.port}`);
    });
};
//# sourceMappingURL=express.loader.js.map