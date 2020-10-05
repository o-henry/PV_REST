"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhrAPI = void 0;
var axios_1 = __importDefault(require("axios"));
exports.xhrAPI = function (url, token) {
    return axios_1.default.create({
        baseURL: url,
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};
//# sourceMappingURL=axios.js.map