"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
const axios_1 = require("@util/axios");
class BaseProvider {
    constructor() {
        this.instance = null;
    }
    setInstance(url, headers) {
        this.instance = axios_1.xhrAPI(url, headers);
        this.instance.interceptors.response.use((response) => response, (error) => Promise.reject(error));
    }
    getInstance() {
        return this.instance;
    }
}
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base.provider.js.map