"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var user_1 = require("../models/user");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.signup = function (req, res) {
        var _a = req.body, mail = _a.mail, password = _a.password;
        console.log(mail, password);
        // res.status(200).send("ok done!");
        var create = function (data) {
            if (data) {
                console.log("1: ", data);
                throw new mongoose_1.Error("username exists");
            }
            else {
                console.log("2: ", data);
                return user_1.user.create({ mail: mail, password: password });
            }
        };
        var check = function (data) {
            if (data) {
                res.status(200).send("회원가입이 완료되었습니다!");
            }
            else {
                throw new mongoose_1.Error("회원가입이 실패하였습니다.");
            }
        };
        var onError = function (err) {
            res.status(409).json({
                message: err.message,
            });
            console.log(err.message);
        };
        user_1.user.findOne({ mail: mail }).then(create).then(check).catch(onError);
    };
    return UserController;
}());
exports.default = UserController;
