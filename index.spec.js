const app = require("./index");
const request = require("supertest");

describe("GET / ", () => {
  describe("연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
  });
});
