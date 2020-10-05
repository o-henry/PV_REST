"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CreateFood = void 0;
var class_validator_1 = require("class-validator");
var Food_1 = require("@models/Food");
var BaseFood = /** @class */ (function () {
    function BaseFood() {
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
}());
var CreateFood = /** @class */ (function (_super) {
    __extends(CreateFood, _super);
    function CreateFood() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateFood.prototype.toEntity = function () {
        var _a = this, name = _a.name, carbohydrate = _a.carbohydrate, natrium = _a.natrium, sugar = _a.sugar, calorie = _a.calorie;
        var food = new Food_1.Food();
        food.name = name;
        food.calorie = calorie;
        food.sugar = sugar;
        food.natrium = natrium;
        food.carbohydrate = carbohydrate;
        return food;
    };
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Food_1.Food)
    ], CreateFood.prototype, "toEntity", null);
    return CreateFood;
}(BaseFood));
exports.CreateFood = CreateFood;
//# sourceMappingURL=food.dto.js.map