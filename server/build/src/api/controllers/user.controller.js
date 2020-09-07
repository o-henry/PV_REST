"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const User_1 = require("@models/User");
const user_services_1 = require("@services/user.services");
let UserController = /** @class */ (() => {
    let UserController = class UserController {
        constructor(userService) {
            this.userService = userService;
        }
        find(user) {
            return user;
        }
    };
    __decorate([
        routing_controllers_1.Get(),
        routing_controllers_1.HttpCode(200),
        routing_controllers_openapi_1.ResponseSchema(User_1.User),
        __param(0, routing_controllers_1.CurrentUser({ required: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User_1.User]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "find", null);
    UserController = __decorate([
        routing_controllers_1.JsonController("/users"),
        routing_controllers_openapi_1.OpenAPI({ security: [{ bearerAuth: [] }] }),
        __metadata("design:paramtypes", [user_services_1.UserService])
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map