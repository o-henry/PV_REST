"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMiddleware = void 0;
const routing_controllers_1 = require("routing-controllers");
const helmet_1 = __importDefault(require("helmet"));
let SecurityMiddleware = /** @class */ (() => {
    let SecurityMiddleware = class SecurityMiddleware {
        use(req, res, next) {
            return helmet_1.default()(req, res, next);
        }
    };
    SecurityMiddleware = __decorate([
        routing_controllers_1.Middleware({ type: "before" })
    ], SecurityMiddleware);
    return SecurityMiddleware;
})();
exports.SecurityMiddleware = SecurityMiddleware;
//# sourceMappingURL=security.middleware.js.map