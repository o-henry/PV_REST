"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typedi_1 = __importDefault(require("typedi"));
const user_services_1 = require("@services/user.services");
const index_1 = __importDefault(require("@config/index"));
class Authentication {
    static isToken(token) {
        return /Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token);
    }
    static generateToken(userId) {
        return jsonwebtoken_1.default.sign({ userId }, index_1.default.jwt.secret, {
            algorithm: "HS512",
            expiresIn: "1d",
        });
    }
    static verifyToken(token) {
        const data = jsonwebtoken_1.default.verify(token, index_1.default.jwt.secret, {
            algorithms: ["HS512"],
        });
        if (data.iat * 1000 - new Date().getTime() > 0)
            return false;
        if (data.exp * 1000 - new Date().getTime() <= 0)
            return false;
        return true;
    }
    static refreshToken(token) {
        const data = jsonwebtoken_1.default.verify(token, index_1.default.jwt.secret, {
            algorithms: ["HS512"],
        });
        if (data.exp - new Date().getTime() / 1000 < 60 * 60) {
            return Authentication.generateToken(data.userId);
        }
        return token;
    }
    static getUserIdByToken(token) {
        return jsonwebtoken_1.default.verify(token, index_1.default.jwt.secret, {
            algorithms: ["HS512"],
        });
    }
    static async currentUserChecker(action) {
        const bearerToken = action.request.headers.authorization;
        if (!Authentication.isToken(bearerToken)) {
            return false;
        }
        const token = bearerToken.replace(/Bearer\s/, "");
        if (!Authentication.verifyToken(token)) {
            return false;
        }
        const userService = typedi_1.default.get(user_services_1.UserService);
        const user = await userService.findOne(Authentication.getUserIdByToken(token).userId);
        action.request.query.user = user;
        return user;
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=Authenticate.js.map