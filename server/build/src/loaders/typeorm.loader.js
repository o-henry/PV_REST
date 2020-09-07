"use strict";
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
exports.typeormLoader = async () => {
    const connectionOptions = {
        type: index_1.default.typeorm.connection,
        host: index_1.default.typeorm.host,
        port: index_1.default.typeorm.port,
        username: index_1.default.typeorm.username,
        password: index_1.default.typeorm.password,
        database: index_1.default.typeorm.database,
        entities: ["src/models/*.*"],
        synchronize: true,
    };
    const connection = await typeorm_1.createConnection(connectionOptions);
    try {
        if (connection) {
            logger_loader_1.default.info("DB 연결에 성공하셨습니다.");
        }
    }
    catch (error) {
        logger_loader_1.default.error(error);
    }
};
//# sourceMappingURL=typeorm.loader.js.map