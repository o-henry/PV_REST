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
exports.FoodController = void 0;
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const food_services_1 = require("@services/food.services");
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
const firebase_provider_1 = require("@providers/firebase.provider");
const food_dto_1 = require("@dto/food.dto");
let FoodController = /** @class */ (() => {
    let FoodController = class FoodController {
        constructor(foodService) {
            this.foodService = foodService;
        }
        find(token, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    const foods = yield this.foodService.find(id);
                    return res.status(200).send(foods);
                }
                else {
                    logger_loader_1.default.error("Can't Find User");
                }
            });
        }
        findByDay(token, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    const foods = yield this.foodService.findByDay(id);
                    return res.status(200).send(foods);
                }
                else {
                    logger_loader_1.default.error("Can't find User");
                }
            });
        }
        findOne(token, name, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    const food = yield this.foodService.findOneByName(name, id);
                    return res.status(200).send(food);
                }
                else {
                    logger_loader_1.default.error("Can't find Id");
                }
            });
        }
        create(food, res, token) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    yield this.foodService.create(food, id);
                }
                else {
                    logger_loader_1.default.error("Login Error");
                }
                return res.status(200).send("success");
            });
        }
        findOneById(token, foodId, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    const food = yield this.foodService.findOneById(foodId, id);
                    return res.status(200).send(food);
                }
                else {
                    logger_loader_1.default.error("Can't find Id");
                }
            });
        }
        delete(token, foodId, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = yield firebase_provider_1.Auth(token);
                if (id) {
                    yield this.foodService.delete(foodId, id);
                }
                else {
                    logger_loader_1.default.error("Can't find Id");
                }
                return res.status(200).send("success delete");
            });
        }
    };
    __decorate([
        routing_controllers_1.Get(),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "find", null);
    __decorate([
        routing_controllers_1.Get("/day"),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "findByDay", null);
    __decorate([
        routing_controllers_1.Get("/:name"),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Param("name")),
        __param(2, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "findOne", null);
    __decorate([
        routing_controllers_1.Post(),
        __param(0, routing_controllers_1.Body()),
        __param(1, routing_controllers_1.Res()),
        __param(2, routing_controllers_1.HeaderParam("authorization")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [food_dto_1.CreateFood, Object, String]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "create", null);
    __decorate([
        routing_controllers_1.Get("/day/:id"),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Param("id")),
        __param(2, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "findOneById", null);
    __decorate([
        routing_controllers_1.Delete("/:id"),
        __param(0, routing_controllers_1.HeaderParam("authorization")),
        __param(1, routing_controllers_1.Param("id")),
        __param(2, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "delete", null);
    FoodController = __decorate([
        routing_controllers_1.JsonController("/foods"),
        routing_controllers_openapi_1.OpenAPI({ security: [{ bearerAuth: [] }] }),
        __metadata("design:paramtypes", [food_services_1.FoodService])
    ], FoodController);
    return FoodController;
})();
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map