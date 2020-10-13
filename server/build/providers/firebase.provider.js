"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrCreateUser = exports.createFBToken = exports.DelUser = exports.Auth = void 0;
const admin = __importStar(require("firebase-admin"));
const index_1 = __importDefault(require("@config/index"));
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
// Initializing for Identify User
const defaultConfig = {
    credential: admin.credential.applicationDefault(),
    projectId: index_1.default.firebase.id,
};
admin.initializeApp(defaultConfig);
function Auth(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield admin
            .auth()
            .verifyIdToken(token.split("Bearer ")[1])
            .then((decodedToken) => {
            return decodedToken.uid;
        });
    });
}
exports.Auth = Auth;
function DelUser(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield admin
            .auth()
            .deleteUser(uid.split("Bearer ")[1])
            .then((res) => {
            logger_loader_1.default.info("response: ", res);
            return res;
        })
            .catch(function (error) {
            logger_loader_1.default.info("Error deleting user:", error);
        });
    });
}
exports.DelUser = DelUser;
function createFBToken(id, email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = `kakao:${id}`;
        yield updateOrCreateUser(userId, email, name);
        return yield admin.auth().createCustomToken(userId, { provider: "KAKAO" });
    });
}
exports.createFBToken = createFBToken;
function updateOrCreateUser(userId, email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateParams = {
            provider: "KAKAO",
            displayName: name,
        };
        if (name) {
            updateParams["displayName"] = name;
        }
        else {
            updateParams["displayName"] = email;
        }
        try {
            return yield admin.auth().updateUser(userId, updateParams);
        }
        catch (error) {
            if (error.code === "auth/user-not-found") {
                updateParams["uid"] = userId;
                if (email) {
                    updateParams["email"] = email;
                }
                return yield admin.auth().createUser(updateParams);
            }
            throw error;
        }
    });
}
exports.updateOrCreateUser = updateOrCreateUser;
//# sourceMappingURL=firebase.provider.js.map