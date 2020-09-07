"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRepository = void 0;
const Food_1 = require("@models/Food");
const typeorm_1 = require("typeorm");
let FoodRepository = /** @class */ (() => {
    let FoodRepository = class FoodRepository extends typeorm_1.Repository {
    };
    FoodRepository = __decorate([
        typeorm_1.EntityRepository(Food_1.Food)
    ], FoodRepository);
    return FoodRepository;
})();
exports.FoodRepository = FoodRepository;
//# sourceMappingURL=food.repository.js.map