"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../src/server");
describe("GET /", () => {
    it("should return 200 OK", async (done) => {
        await supertest_1.default(server_1.startServer).get("/").expect(200);
        done();
    });
});
//# sourceMappingURL=api.test.js.map