"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
var _a = process.env, MONGO_USER = _a.MONGO_USER, MONGO_PASSWORD = _a.MONGO_PASSWORD;
var port = process.env.PORT || 3000;
mongoose_1.default.connect("mongodb://" + MONGO_USER + ":" + MONGO_PASSWORD + ":27017/admin", {
    dbName: "Balan",
}, function (error) {
    if (error) {
        throw error.message;
        console.log("몽고디비 연결 에러");
    }
    else {
        console.log("몽고디비 연결 성공!");
    }
});
index_1.default.listen(port, function () {
    console.log("server is running");
});
