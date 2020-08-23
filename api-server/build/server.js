"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const microframework_w3tec_1 = require("microframework-w3tec");
const express_loader_1 = require("@loaders/express.loader");
microframework_w3tec_1.bootstrapMicroframework({
    loaders: [express_loader_1.expressLoader],
});
//# sourceMappingURL=server.js.map