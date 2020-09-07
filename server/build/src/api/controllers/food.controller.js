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
exports.FoodController = void 0;
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const food_services_1 = require("@services/food.services");
const User_1 = require("@models/User");
const food_dto_1 = require("@dto/food.dto");
let FoodController = /** @class */ (() => {
    let FoodController = class FoodController {
        constructor(foodService) {
            this.foodService = foodService;
        }
        async create(food, user, res) {
            await this.foodService.create(food, user.id);
            return res.send("success");
        }
    };
    __decorate([
        routing_controllers_1.Post(),
        routing_controllers_openapi_1.ResponseSchema(food_dto_1.FoodResponse),
        __param(0, routing_controllers_1.Body()),
        __param(1, routing_controllers_1.CurrentUser({ required: true })),
        __param(2, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [food_dto_1.CreateFood,
            User_1.User, Object]),
        __metadata("design:returntype", Promise)
    ], FoodController.prototype, "create", null);
    FoodController = __decorate([
        routing_controllers_1.JsonController("/foods"),
        routing_controllers_openapi_1.OpenAPI({ security: [{ bearerAuth: [] }] }),
        __metadata("design:paramtypes", [food_services_1.FoodService])
    ], FoodController);
    return FoodController;
})();
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map