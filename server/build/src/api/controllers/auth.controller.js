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
exports.AuthController = void 0;
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const auth_services_1 = require("@services/auth.services");
const user_services_1 = require("@services/user.services");
const Authenticate_1 = require("@auth/Authenticate");
const user_dto_1 = require("@dto/user.dto");
let AuthController = /** @class */ (() => {
    let AuthController = class AuthController {
        constructor(authService, userService) {
            this.authService = authService;
            this.userService = userService;
        }
        async login(loginUser, res) {
            const user = await this.authService.validateUser(loginUser);
            if (!user)
                return res
                    .status(401)
                    .send({ message: "유효하지 않은 사용자 이름 또는 비밀번호 입니다." });
            const accessToken = Authenticate_1.Authentication.generateToken(user.id);
            return res.status(201).json({ accessToken });
        }
        async create(user, res) {
            const check = await this.userService.check(user.id);
            if (check) {
                return {
                    error: true,
                    message: "This ID is already registered.",
                };
            }
            const newUser = await this.userService.create(user);
            const accessToken = Authenticate_1.Authentication.generateToken(newUser.id);
            return res.status(201).json({ accessToken });
        }
    };
    __decorate([
        routing_controllers_1.HttpCode(200),
        routing_controllers_1.Post("/login"),
        routing_controllers_openapi_1.OpenAPI({
            summary: "Login User",
            statusCode: "200",
            response: {
                "401": {
                    description: "Unauthorized",
                },
            },
        }),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.LoginUser, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "login", null);
    __decorate([
        routing_controllers_1.HttpCode(200),
        routing_controllers_1.Post("/register"),
        routing_controllers_openapi_1.ResponseSchema(user_dto_1.UserResponse),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.CreateUser, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "create", null);
    AuthController = __decorate([
        routing_controllers_1.JsonController("/auth"),
        __metadata("design:paramtypes", [auth_services_1.AuthService,
            user_services_1.UserService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map