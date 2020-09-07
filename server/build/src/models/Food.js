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
exports.Food = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
let Food = /** @class */ (() => {
    let Food = class Food {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Food.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Food.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Food.prototype, "calorie", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Food.prototype, "sugar", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Food.prototype, "natrium", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Food.prototype, "carbohydrate", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.CreateDateColumn({ name: "created_at" }),
        __metadata("design:type", Date)
    ], Food.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "user_id", nullable: true }),
        __metadata("design:type", String)
    ], Food.prototype, "userId", void 0);
    __decorate([
        typeorm_1.ManyToOne((type) => User_1.User, (user) => user.foods),
        typeorm_1.JoinColumn({ name: "user_id" }),
        __metadata("design:type", User_1.User)
    ], Food.prototype, "user", void 0);
    Food = __decorate([
        typeorm_1.Entity()
    ], Food);
    return Food;
})();
exports.Food = Food;
//# sourceMappingURL=Food.js.map