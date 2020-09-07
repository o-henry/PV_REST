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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFood = exports.FoodResponse = void 0;
const class_validator_1 = require("class-validator");
const Food_1 = require("@models/Food");
const user_dto_1 = require("@dto/user.dto");
let BaseFood = /** @class */ (() => {
    class BaseFood {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], BaseFood.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], BaseFood.prototype, "calorie", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], BaseFood.prototype, "sugar", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], BaseFood.prototype, "natrium", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Number)
    ], BaseFood.prototype, "carbohydrate", void 0);
    return BaseFood;
})();
let FoodResponse = /** @class */ (() => {
    class FoodResponse extends BaseFood {
    }
    __decorate([
        class_validator_1.IsUUID(),
        __metadata("design:type", String)
    ], FoodResponse.prototype, "id", void 0);
    __decorate([
        class_validator_1.ValidateNested(),
        __metadata("design:type", user_dto_1.UserResponse)
    ], FoodResponse.prototype, "user", void 0);
    return FoodResponse;
})();
exports.FoodResponse = FoodResponse;
let CreateFood = /** @class */ (() => {
    class CreateFood extends BaseFood {
        toEntity() {
            const { name, calorie, sugar, natrium, carbohydrate } = this;
            const food = new Food_1.Food();
            food.name = name;
            food.calorie = calorie;
            food.sugar = sugar;
            food.natrium = natrium;
            food.carbohydrate = carbohydrate;
            return food;
        }
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Food_1.Food)
    ], CreateFood.prototype, "toEntity", null);
    return CreateFood;
})();
exports.CreateFood = CreateFood;
//# sourceMappingURL=food.dto.js.map