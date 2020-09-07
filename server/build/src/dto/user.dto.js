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
exports.LoginUser = exports.CreateUser = exports.UserResponse = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const User_1 = require("@models/User");
const food_dto_1 = require("@dto/food.dto");
let BaseUser = /** @class */ (() => {
    class BaseUser {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], BaseUser.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], BaseUser.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], BaseUser.prototype, "age", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], BaseUser.prototype, "gender", void 0);
    return BaseUser;
})();
let UserResponse = /** @class */ (() => {
    class UserResponse extends BaseUser {
    }
    __decorate([
        class_validator_1.IsUUID(),
        __metadata("design:type", String)
    ], UserResponse.prototype, "id", void 0);
    __decorate([
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(() => food_dto_1.FoodResponse),
        __metadata("design:type", Array)
    ], UserResponse.prototype, "foods", void 0);
    return UserResponse;
})();
exports.UserResponse = UserResponse;
let CreateUser = /** @class */ (() => {
    class CreateUser extends BaseUser {
        toEntity() {
            const { id, name, age, gender, password } = this;
            const user = new User_1.User();
            user.nickname = id;
            user.name = name;
            user.age = age;
            user.gender = gender;
            user.password = password;
            return user;
        }
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], CreateUser.prototype, "password", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", User_1.User)
    ], CreateUser.prototype, "toEntity", null);
    return CreateUser;
})();
exports.CreateUser = CreateUser;
let LoginUser = /** @class */ (() => {
    class LoginUser {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], LoginUser.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], LoginUser.prototype, "password", void 0);
    return LoginUser;
})();
exports.LoginUser = LoginUser;
//# sourceMappingURL=user.dto.js.map