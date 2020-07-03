"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const typeorm_1 = __importDefault(require("./typeorm"));
exports.default = async ({ expressApp }) => {
    await express_1.default({ app: expressApp });
    await typeorm_1.default();
};
//# sourceMappingURL=index.js.map