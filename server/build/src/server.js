"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
require("module-alias/register");
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
async function startServer() {
    const app = express_1.default();
    const server = require("http").Server(app);
    await require("./loaders").default({ expressApp: app });
    server.listen(config_1.default.port, () => {
        console.log(`Server listening on port: ${config_1.default.port}`);
    });
}
exports.startServer = startServer;
startServer();
//# sourceMappingURL=server.js.map