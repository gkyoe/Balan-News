"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
describe("GET / ", function () {
    describe("연결이 성공할 경우 ", function () {
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
});
