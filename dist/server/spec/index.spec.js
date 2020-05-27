"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_index_1 = __importDefault(require("../app.index"));
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
var chai_1 = require("chai");
require("dotenv");
describe("Test를 시작하기 전에 ", function () {
    it("몽고디비를 연결한다 ", function () {
        beforeEach(function () {
            mongoose_1.default.connect("" + process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        });
    });
    describe("GET / 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(app_index_1.default)
                .get("/")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    describe("POST/signin 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(app_index_1.default)
                .post("/signin")
                .send({ mail: "apple@gmail.com", password: "apple" })
                // .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                console.log(res.body);
                chai_1.expect(res.status).to.equal(200);
                chai_1.expect(res.body).has.all.keys(["data", "message"]);
                done();
            });
        });
    });
    describe("POST/singup 연결이 성공할 경우 ", function () {
        it("이미 가입된 유저가 요청 시 404 코드로 응답한다", function (done) {
            supertest_1.default(app_index_1.default)
                .post("/signup")
                .send({ mail: "apple@gmail.com", password: "apple" })
                .set("Accept", "application/json")
                .expect(404)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    describe("POST/singup 연결이 성공할 경우 ", function () {
        it("새로운 유저가 요청 시 200 코드로 응답한다", function (done) {
            supertest_1.default(app_index_1.default)
                .post("/signup")
                .send({ mail: "choco@gmail.com", password: "choco" })
                // .set("Accept", "application/json")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
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
