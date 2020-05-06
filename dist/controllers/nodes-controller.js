"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.index = function (req, res) {
        res.status(200);
        res.send("Hello world");
    };
    return Controller;
}());
exports.Controller = Controller;
