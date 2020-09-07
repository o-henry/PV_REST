"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhrAPI = void 0;
const axios_1 = __importDefault(require("axios"));
exports.xhrAPI = (url, headers) => {
    return axios_1.default.create({
        baseURL: url,
        headers: headers || {},
    });
};
//# sourceMappingURL=axios.js.map