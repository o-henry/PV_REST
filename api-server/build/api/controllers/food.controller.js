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
const food_provider_1 = require("@providers/food.provider");
const server_provider_1 = require("@providers/server.provider");
const preprocessing_1 = require("@util/preprocessing");
let FoodController = class FoodController {
    async create(body) {
        const xhr = new food_provider_1.FoodProvider();
        const fetch = new server_provider_1.ServerProvider();
        /**
         * @param filtering
         **/
        const data = await xhr.getIngredients(encodeURI(body.name));
        {
            if (data) {
                return await fetch.postFoodData(preprocessing_1.preprocess(data, body.name));
            }
        }
    }
};
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "create", null);
FoodController = __decorate([
    routing_controllers_1.JsonController("/foods")
], FoodController);
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map