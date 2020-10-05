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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodController = void 0;
const routing_controllers_1 = require("routing-controllers");
const food_provider_1 = require("@providers/food.provider");
const preprocessing_1 = require("@util/preprocessing");
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
let FoodController = class FoodController {
    async create(body, res) {
        const xhr = new food_provider_1.FoodProvider();
        /**
         * @param filtering
         **/
        const data = await xhr.getIngredients(encodeURI(body.name));
        {
            if (data) {
                let convert = await preprocessing_1.preprocess(data, body.name);
                return res.send({ convert });
            }
            else {
                logger_loader_1.default.error("해당하는 음식을 찾지 못했습니다.");
                return res.send({ error: "Food data doesn't exist" });
            }
        }
    }
};
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body({ required: true })),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "create", null);
FoodController = __decorate([
    routing_controllers_1.JsonController("/foods")
], FoodController);
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map