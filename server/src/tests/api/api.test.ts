import request from "supertest";
import { startServer } from "../../server";

describe("GET /", () => {
  it("should return 200 OK", async (done) => {
    return await request(startServer).get("/").expect(200);
    done();
  });
});
