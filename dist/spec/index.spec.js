"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
describe("Test를 시작하기 전에 ", function () {
    it("몽고디비를 연결한다 ", function () {
        before(function (done) {
            if (mongoose_1.default.connection.db) {
                mongoose_1.default.connect("mongodb://localhost/admin", {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
                done();
            }
        });
    });
    describe("GET / 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(index_1.default)
                .get("/")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    describe("GET/login 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(index_1.default)
                .get("/login")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    describe("GET/singup 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(index_1.default)
                .get("/signup")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    describe("GET/logout 연결이 성공할 경우 ", function () {
        it("상태코드 200을 응답한다.", function (done) {
            supertest_1.default(index_1.default)
                .get("/signup")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
});
