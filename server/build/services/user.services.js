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
exports.UserService = void 0;
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const user_repository_1 = require("@repositories/user.repository");
let UserService = /** @class */ (() => {
    let UserService = class UserService {
        constructor(userRepository) {
            this.userRepository = userRepository;
        }
        find() {
            return this.userRepository.find({ relations: ["foods"] });
        }
        findOne(id) {
            return this.userRepository.findOne({ id });
        }
    };
    UserService = __decorate([
        typedi_1.Service(),
        __param(0, typeorm_typedi_extensions_1.OrmRepository()),
        __metadata("design:paramtypes", [user_repository_1.UserRepository])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map