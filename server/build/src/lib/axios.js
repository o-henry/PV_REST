"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchKakao = exports.fetchFood = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("@config/index"));
/* Fetch Food DB */
exports.fetchFood = axios_1.default.create({
    baseURL: `${index_1.default.foods.url}/${index_1.default.foods.keyId}/${index_1.default.foods.serviceId}`,
});
/* Fetch Kakao API */
exports.fetchKakao = axios_1.default.create({
    baseURL: process.env.KAKAO_URL,
    headers: {
        "Content-Type": "application/octet-stream",
        "Transfer-Encoding": "chunked",
        Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
    },
});
//# sourceMappingURL=axios.js.map