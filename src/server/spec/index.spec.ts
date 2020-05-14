import app from "../app.index";
import request from "supertest";
import mongoose from "mongoose";

describe("Test를 시작하기 전에 ", () => {
  it("몽고디비를 연결한다 ", () => {
    before((done) => {
      if (mongoose.connection.db) {
        mongoose.connect("mongodb://localhost/admin", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        done();
      }
    });
  });

  describe("GET / 연결이 성공할 경우 ", () => {
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

  describe("GET/login 연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .get("/login")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
  });

  describe("GET/singup 연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .get("/signup")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
  });

  describe("GET/logout 연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .get("/signup")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
  });
});
