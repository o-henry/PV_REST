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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const User_1 = require("@models/User");
const user_services_1 = require("@services/user.services");
const user_dto_1 = require("@dto/user.dto");
const firebase_provider_1 = require("@providers/firebase.provider");
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
let UserController = /** @class */ (() => {
    let UserController = class UserController {
        constructor(userService) {
            this.userService = userService;
        }
        find(user) {
            return user;
        }
        createToken(body, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let token = yield firebase_provider_1.createFBToken(body.id, body.email, body.name);
                if (token) {
                    return res.status(200).send(token);
                }
            });
        }
        delete(id, res) {
            return __awaiter(this, void 0, void 0, function* () {
                logger_loader_1.default.info("계정이 삭제되었습니다.");
                const del = yield firebase_provider_1.DelUser(id);
                return res.status(200).send(del);
            });
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
    __decorate([
        routing_controllers_1.Post(),
        __param(0, routing_controllers_1.Body()),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.CreateKakaoUser, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "createToken", null);
    __decorate([
        routing_controllers_1.Delete(),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "delete", null);
    UserController = __decorate([
        routing_controllers_1.JsonController("/users"),
        routing_controllers_openapi_1.OpenAPI({ security: [{ bearerAuth: [] }] }),
        __metadata("design:paramtypes", [user_services_1.UserService])
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map