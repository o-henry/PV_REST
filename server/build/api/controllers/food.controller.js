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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodController = void 0;
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var food_services_1 = require("@services/food.services");
var logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
var firebase_provider_1 = require("@providers/firebase.provider");
var food_dto_1 = require("@dto/food.dto");
var FoodController = /** @class */ (function () {
    function FoodController(foodService) {
        this.foodService = foodService;
    }
    FoodController.prototype.find = function (token, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, foods;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.find(id)];
                    case 2:
                        foods = _a.sent();
                        return [2 /*return*/, res.status(200).send(foods)];
                    case 3:
                        logger_loader_1.default.error("Can't Find User");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FoodController.prototype.findByDay = function (token, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, foods;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.findByDay(id)];
                    case 2:
                        foods = _a.sent();
                        return [2 /*return*/, res.status(200).send(foods)];
                    case 3:
                        logger_loader_1.default.error("Can't find User");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FoodController.prototype.findOne = function (token, name, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, food;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.findOneByName(name, id)];
                    case 2:
                        food = _a.sent();
                        return [2 /*return*/, res.status(200).send(food)];
                    case 3:
                        logger_loader_1.default.error("Can't find Id");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FoodController.prototype.create = function (food, res, token) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.create(food, id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        logger_loader_1.default.error("Login Error");
                        _a.label = 4;
                    case 4: return [2 /*return*/, res.status(200).send("success")];
                }
            });
        });
    };
    FoodController.prototype.findOneById = function (token, foodId, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, food;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.findOneById(foodId, id)];
                    case 2:
                        food = _a.sent();
                        return [2 /*return*/, res.status(200).send(food)];
                    case 3:
                        logger_loader_1.default.error("Can't find Id");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FoodController.prototype.delete = function (token, foodId, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_provider_1.Auth(token)];
                    case 1:
                        id = _a.sent();
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.foodService.delete(foodId, id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        logger_loader_1.default.error("Can't find Id");
                        _a.label = 4;
                    case 4: return [2 /*return*/, res.status(200).send("success delete")];
                }
            });
        });
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
}());
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map