"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodes_controller_1 = require("../controllers/nodes-controller");
var Routes = /** @class */ (function () {
    function Routes() {
        this.controller = new nodes_controller_1.Controller();
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(this.controller.index);
    };
    return Routes;
}());
exports.Routes = Routes;
