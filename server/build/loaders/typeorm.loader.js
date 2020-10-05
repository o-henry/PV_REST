"use strict";
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
exports.typeormLoader = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const index_1 = __importDefault(require("@config/index"));
const logger_loader_1 = __importDefault(require("@loaders/logger.loader"));
// TypeDI Service container integration with TypeORM
typeorm_1.useContainer(typedi_1.Container);
exports.typeormLoader = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionOptions = {
        type: index_1.default.typeorm.connection,
        host: index_1.default.typeorm.host,
        port: index_1.default.typeorm.port,
        username: index_1.default.typeorm.username,
        password: index_1.default.typeorm.password,
        database: index_1.default.typeorm.database,
        entities: ["src/models/*.*"],
        logging: false,
        synchronize: true,
    };
    const connection = yield typeorm_1.createConnection(connectionOptions);
    try {
        if (connection) {
            logger_loader_1.default.info("DB 연결에 성공하셨습니다.");
        }
    }
    catch (error) {
        logger_loader_1.default.error("DB 연결 실패", error);
    }
});
//# sourceMappingURL=typeorm.loader.js.map