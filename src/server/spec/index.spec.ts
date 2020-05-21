import app from "../app.index";
import request from "supertest";
import mongoose from "mongoose";
import * as models from "../models";
import "dotenv";
import { doesNotMatch } from "assert";

describe("Test를 시작하기 전에 ", () => {
  it("몽고디비를 연결한다 ", () => {
    before(async () => {
      if (mongoose.connection.db) {
        await mongoose.connect(`${process.env.MONGO_URL}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      }
    });
  });

  describe("GET / 연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) done(err);
          done();
        });
    });
  });

  describe("POST/signin 연결이 성공할 경우 ", () => {
    it("상태코드 200을 응답한다.", (done) => {
      request(app)
        .post("/signin")
        .send({ mail: "duli@gmail.com", password: "ffff" })
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        });
      done();
    });
  });

  describe("POST/singup 연결이 성공할 경우 ", () => {
    it("이미 가입된 유저가 요청 시 409 코드로 응답한다", (done) => {
      request(app)
        .post("/signup")
        .send({ mail: "duli@gmail.com", password: "ffff" })
        .set("Accept", "application/json")
        .expect(409)
        .end((err, res) => {
          if (err) throw err;
        });
      done();
    });
  });

  describe("POST/singup 연결이 성공할 경우 ", () => {
    it("새로운 유저가 요청 시 200 코드로 응답한다", (done) => {
      request(app)
        .post("/signup")
        .send({ mail: "gagamel@gmail.com", password: "asdf" })
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
        });
      done();
    });
  });

  // describe("GET/logout 연결이 성공할 경우 ", () => {
  //   it("상태코드 200을 응답한다.", (done) => {
  //     request(app)
  //       .get("/signup")
  //       .expect(200)
  //       .end((err, res) => {
  //         if (err) throw err;
  //       });
  //     done();
  //   });
  // });
});
