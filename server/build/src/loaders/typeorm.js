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
Object.defineProperty(exports, "__esModule", { value: true });
const typeormLoader = () => __awaiter(void 0, void 0, void 0, function* () {
    // const loadedConnectionOptions = await getConnectionOptions();
    // const connectionOptions = Object.assign(loadedConnectionOptions, {
    //   type: config.typeorm.connection,
    //   host: config.typeorm.host,
    //   port: config.typeorm.port,
    //   username: config.typeorm.username,
    //   password: config.typeorm.password,
    //   database: config.typeorm.database,
    // });
    // const connection: Connection = await createConnection(connectionOptions);
    // return connection;
});
exports.default = typeormLoader;
