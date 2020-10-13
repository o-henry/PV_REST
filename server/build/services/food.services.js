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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const date_fns_1 = require("date-fns");
const food_repository_1 = require("@repositories/food.repository");
let FoodService = /** @class */ (() => {
    let FoodService = class FoodService {
        constructor(foodRepository) {
            this.foodRepository = foodRepository;
        }
        create(createfood, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                const food = createfood.toEntity();
                food.userId = userId;
                food.date = date_fns_1.getDay(new Date());
                return yield this.foodRepository.save(food);
            });
        }
        find(userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.foodRepository.find({
                    where: {
                        userId: userId,
                        createdDate: food_repository_1.BeforeDate(new Date()),
                    },
                });
            });
        }
        findByDay(userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.foodRepository.find({
                    where: {
                        userId: userId,
                        createdDate: food_repository_1.AfterDate(new Date()),
                    },
                });
            });
        }
        findOneByName(name, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.foodRepository.findOneByName(name, userId);
            });
        }
        findOneById(foodId, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.foodRepository.findOneById(foodId, userId);
            });
        }
        delete(foodId, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                const deleteFood = yield this.foodRepository.findOneById(foodId, userId);
                if (deleteFood.userId == userId) {
                    yield this.foodRepository.delete({ id: foodId });
                    return;
                }
            });
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