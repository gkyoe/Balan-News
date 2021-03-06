"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_index_1 = __importDefault(require("../app.index"));
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
var chai_1 = require("chai");
var models_1 = require("../models");
require("dotenv");
// before() 모든 테스트들이 수행되기전 단 한번만 실행된다
// after() 모든 테스트들이 수행된후 단 한번만 실행된다
// beforeEach() 각 테스트들이 수행되기전 실행된다
// afterEach() 각 테스트들이 수행된후 실행된다
describe("Test를 시작하기 전에 ", function () {
    var user = mongoose_1.default.model("User", models_1.User.UserSchema);
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose_1.default.connect("" + process.env.MONGO_DEV, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose_1.default.disconnect()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
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
                chai_1.expect(res.body).has.all.keys(["token", "message"]);
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
                .send({ mail: "chocolate@gmail.com", password: "chocolate" })
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
