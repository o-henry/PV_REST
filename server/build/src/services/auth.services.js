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
exports.AuthService = void 0;
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const User_1 = require("@models/User");
const user_repository_1 = require("@repositories/user.repository");
let AuthService = /** @class */ (() => {
    let AuthService = class AuthService {
        constructor(userRepository) {
            this.userRepository = userRepository;
        }
        async validateUser(loginUser) {
            const user = await this.userRepository.findOne({
                where: {
                    nickname: loginUser.id,
                },
            });
            if (await User_1.User.comparePassword(user, loginUser.password)) {
                return user;
            }
            return undefined;
        }
        async validateUserToken(userId, refreshToken) {
            const user = await this.userRepository.findOne({
                where: {
                    id: userId,
                    refreshToken: refreshToken,
                },
            });
            if (user) {
                return user;
            }
            return undefined;
        }
        async saveRefreshToken(user, token) {
            user.refreshToken = token;
            await this.userRepository.save(user);
        }
    };
    AuthService = __decorate([
        typedi_1.Service(),
        __param(0, typeorm_typedi_extensions_1.OrmRepository()),
        __metadata("design:paramtypes", [user_repository_1.UserRepository])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.services.js.map