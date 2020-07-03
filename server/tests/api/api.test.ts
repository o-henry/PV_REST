import request from "supertest";
import { startServer } from "../../src/server";

describe("GET /", () => {
  it("should return 200 OK", async (done: () => void) => {
    await request(startServer).get("/").expect(200);
    done();
  });
});
