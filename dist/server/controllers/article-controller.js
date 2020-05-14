"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.index = function (req, res) {
        res.status(200);
        res.send("Hello world");
    };
    Controller.prototype.login = function (req, res) {
        res.status(200);
        res.send("plz login!");
    };
    Controller.prototype.signup = function (req, res) {
        res.status(200);
        res.send("plz signup!");
    };
    Controller.prototype.logout = function (req, res) {
        res.status(200);
        res.send("See you again!");
    };
    return Controller;
}());
exports.default = Controller;
