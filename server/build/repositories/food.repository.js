"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.BeforeDate = exports.AfterDate = exports.FoodRepository = void 0;
const typeorm_1 = require("typeorm");
const date_fns_1 = require("date-fns");
const Food_1 = require("@models/Food");
let FoodRepository = /** @class */ (() => {
    let FoodRepository = class FoodRepository extends typeorm_1.Repository {
        findOneByName(name, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.createQueryBuilder("food")
                    .select([
                    "food.name",
                    "food.natrium",
                    "food.carbohydrate",
                    "food.sugar",
                    "food.calorie",
                    "food.date",
                ])
                    .where("food.userId = :userId", { userId })
                    .andWhere("food.name = :name", { name })
                    .orderBy("food.createdDate", "DESC")
                    .getOne();
            });
        }
        findOneById(foodId, userId) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.createQueryBuilder("food")
                    .select([
                    "food.name",
                    "food.natrium",
                    "food.carbohydrate",
                    "food.sugar",
                    "food.calorie",
                    "food.date",
                    "food.userId",
                ])
                    .where("food.userId = :userId", { userId })
                    .andWhere("food.id = :foodId", { foodId })
                    .orderBy("food.createdDate", "DESC")
                    .getOne();
            });
        }
    };
    FoodRepository = __decorate([
        typeorm_1.EntityRepository(Food_1.Food)
    ], FoodRepository);
    return FoodRepository;
})();
exports.FoodRepository = FoodRepository;
exports.AfterDate = (date) => {
    return typeorm_1.MoreThanOrEqual(date_fns_1.format(date, "yyyy-MM-dd"));
};
exports.BeforeDate = (date) => {
    let a = date_fns_1.subDays(date, 7), b = date_fns_1.subDays(date, 6), c = date_fns_1.subDays(date, 5), d = date_fns_1.subDays(date, 4), e = date_fns_1.subDays(date, 3), f = date_fns_1.subDays(date, 2), g = date_fns_1.subDays(date, 1);
    if (date_fns_1.isMonday(date)) {
        date = date;
    }
    else if (date_fns_1.isMonday(a)) {
        date = a;
    }
    else if (date_fns_1.isMonday(b)) {
        date = b;
    }
    else if (date_fns_1.isMonday(c)) {
        date = c;
    }
    else if (date_fns_1.isMonday(d)) {
        date = d;
    }
    else if (date_fns_1.isMonday(e)) {
        date = e;
    }
    else if (date_fns_1.isMonday(f)) {
        date = f;
    }
    else if (date_fns_1.isMonday(g)) {
        date = g;
    }
    if (date_fns_1.isThisWeek(date, { weekStartsOn: 1 })) {
        return typeorm_1.MoreThanOrEqual(date_fns_1.format(date, "yyyy-MM-dd"));
    }
};
//# sourceMappingURL=food.repository.js.map