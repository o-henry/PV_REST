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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrCreateUser = exports.createFBToken = exports.DelUser = exports.Auth = void 0;
var admin = __importStar(require("firebase-admin"));
var index_1 = __importDefault(require("@config/index"));
var logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
// Initializing for Identify User
var defaultConfig = {
    credential: admin.credential.applicationDefault(),
    projectId: index_1.default.firebase.id,
};
admin.initializeApp(defaultConfig);
function Auth(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, admin
                        .auth()
                        .verifyIdToken(token.split("Bearer ")[1])
                        .then(function (decodedToken) {
                        return decodedToken.uid;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.Auth = Auth;
function DelUser(uid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, admin
                        .auth()
                        .deleteUser(uid.split("Bearer ")[1])
                        .then(function (res) {
                        logger_loader_1.default.info("response: ", res);
                        return res;
                    })
                        .catch(function (error) {
                        logger_loader_1.default.info("Error deleting user:", error);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.DelUser = DelUser;
function createFBToken(id, email, name) {
    return __awaiter(this, void 0, void 0, function () {
        var userId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = "kakao:" + id;
                    return [4 /*yield*/, updateOrCreateUser(userId, email, name)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, admin.auth().createCustomToken(userId, { provider: "KAKAO" })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createFBToken = createFBToken;
function updateOrCreateUser(userId, email, name) {
    return __awaiter(this, void 0, void 0, function () {
        var updateParams, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateParams = {
                        provider: "KAKAO",
                        displayName: name,
                    };
                    if (name) {
                        updateParams["displayName"] = name;
                    }
                    else {
                        updateParams["displayName"] = email;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, admin.auth().updateUser(userId, updateParams)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    if (!(error_1.code === "auth/user-not-found")) return [3 /*break*/, 5];
                    updateParams["uid"] = userId;
                    if (email) {
                        updateParams["email"] = email;
                    }
                    return [4 /*yield*/, admin.auth().createUser(updateParams)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updateOrCreateUser = updateOrCreateUser;
//# sourceMappingURL=firebase.provider.js.map