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
exports.FoodService = void 0;
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const food_repository_1 = require("@repositories/food.repository");
let FoodService = /** @class */ (() => {
    let FoodService = class FoodService {
        constructor(foodRepository) {
            this.foodRepository = foodRepository;
        }
        async create(createfood, userId) {
            const food = createfood.toEntity();
            food.userId = userId;
            return await this.foodRepository.save(food);
        }
    };
    FoodService = __decorate([
        typedi_1.Service(),
        __param(0, typeorm_typedi_extensions_1.OrmRepository()),
        __metadata("design:paramtypes", [food_repository_1.FoodRepository])
    ], FoodService);
    return FoodService;
})();
exports.FoodService = FoodService;
//# sourceMappingURL=food.services.js.map