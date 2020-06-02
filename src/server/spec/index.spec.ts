import app from "../app.index";
import request from "supertest";
import mongoose from "mongoose";
import { expect } from "chai";
import { Article, User } from "../models";
import fakedata from "./fakedata.json";
import "dotenv";
import { doesNotMatch, doesNotReject } from "assert";
import UserController from "../controllers/user-controller";

describe("Test를 시작하기 전에 ", () => {
  const user = mongoose.model("User", User.UserSchema);

  beforeEach(async () => {
    await mongoose.connect(`${process.env.MONGO_DEV}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // const user = mongoose.model("User", User.UserSchema);
    // await user.collection.remove({});
    // await user.collection
    //   .insertMany(fakedata)
    //   .then((doc) => {
    //     console.log(doc);
    //   })
    //   .catch((err) => {
    //     throw err.message;
    //     console.log("failed to insert fakedata");
    //   });
  });

  afterEach(async () => {
    await mongoose.disconnect();
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

  describe("POST/signin 연결이 성공할 경우 ", function () {
    it("상태코드 200을 응답한다.", function (done) {
      request(app)
        .post("/signin")
        .send({ mail: "apple@gmail.com", password: "apple" })
        // .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          console.log(res.body);
          expect(res.status).to.equal(200);
          expect(res.body).has.all.keys(["token", "message"]);
          done();
        });
    });
  });

  describe("POST/singup 연결이 성공할 경우 ", () => {
    it("이미 가입된 유저가 요청 시 404 코드로 응답한다", (done) => {
      request(app)
        .post("/signup")
        .send({ mail: "apple@gmail.com", password: "apple" })
        .set("Accept", "application/json")
        .expect(404)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
    });
  });

  describe("POST/singup 연결이 성공할 경우 ", () => {
    it("새로운 유저가 요청 시 200 코드로 응답한다", (done) => {
      request(app)
        .post("/signup")
        .send({ mail: "chocolate@gmail.com", password: "chocolate" })
        // .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          done();
        });
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
