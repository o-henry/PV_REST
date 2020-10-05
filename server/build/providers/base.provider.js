"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
var axios_1 = require("@util/axios");
var BaseProvider = /** @class */ (function () {
    function BaseProvider() {
        this.instance = null;
    }
    BaseProvider.prototype.setInstance = function (url, headers) {
        this.instance = axios_1.xhrAPI(url, headers);
        this.instance.interceptors.response.use(function (response) { return response; }, function (error) { return Promise.reject(error); });
    };
    BaseProvider.prototype.getInstance = function () {
        return this.instance;
    };
    return BaseProvider;
}());
exports.BaseProvider = BaseProvider;
//# sourceMappingURL=base.provider.js.map