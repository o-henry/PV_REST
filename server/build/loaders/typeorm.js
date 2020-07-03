"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const index_1 = __importDefault(require("@config/index"));
const typeormLoader = async () => {
    const connectionOptions = {
        type: index_1.default.typeorm.connection,
        host: index_1.default.typeorm.host,
        port: index_1.default.typeorm.port,
        username: index_1.default.typeorm.username,
        password: index_1.default.typeorm.password,
        database: index_1.default.typeorm.database,
        entities: ["models/*.*"],
        synchronize: true,
        debug: true,
    };
    const connection = await typeorm_1.createConnection(connectionOptions);
    try {
        console.log("DB 연결에 성공하셨습니다.", connection);
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = typeormLoader;
//# sourceMappingURL=typeorm.js.map