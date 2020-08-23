"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerProvider = void 0;
const base_provider_1 = require("@providers/base.provider");
const index_1 = __importDefault(require("@config/index"));
class ServerProvider extends base_provider_1.BaseProvider {
    constructor() {
        super();
    }
    async postFoodData(data) {
        this.setInstance(index_1.default.main.url, {});
        const request = await this.getInstance().post(index_1.default.main.foods, data);
        return request.config.data;
    }
}
exports.ServerProvider = ServerProvider;
//# sourceMappingURL=server.provider.js.map