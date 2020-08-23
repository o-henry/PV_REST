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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodProvider = void 0;
const base_provider_1 = require("@providers/base.provider");
const index_1 = __importDefault(require("@config/index"));
const typedi_1 = require("typedi");
let FoodProvider = class FoodProvider extends base_provider_1.BaseProvider {
    constructor() {
        super();
    }
    async getIngredients(query) {
        var _a;
        this.setInstance(index_1.default.foods.url, {});
        const response = await ((_a = this.getInstance()) === null || _a === void 0 ? void 0 : _a.get(`/json/1/500/DESC_KOR=${query}`));
        return response === null || response === void 0 ? void 0 : response.data.I2790.row;
    }
};
FoodProvider = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], FoodProvider);
exports.FoodProvider = FoodProvider;
//# sourceMappingURL=food.provider.js.map