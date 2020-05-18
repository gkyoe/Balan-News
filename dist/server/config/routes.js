"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
// import articleController from "../controllers/article-controller";
var user_controller_1 = __importDefault(require("../controllers/user-controller"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.userController = new user_controller_1.default();
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.status(200).send("main page");
        });
        // app.route("/login").get(this.controller.login);
        app.route("/signup").post(this.userController.signup);
        // app.route("/logout").get(this.controller.logout);
    };
    return Routes;
}());
exports.Routes = Routes;
