const app = require("./index");
const request = require("supertest");

describe("GET /users는", () => {
  it("....", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
