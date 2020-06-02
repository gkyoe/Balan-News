"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var article_controller_1 = __importDefault(require("../controllers/article-controller"));
var user_controller_1 = __importDefault(require("../controllers/user-controller"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.userController = new user_controller_1.default();
        this.articleController = new article_controller_1.default();
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.status(200).send("main page");
        });
        app.route("/signin").post(this.userController.signin);
        app.route("/signup").post(this.userController.signup);
        app.route("/select").get(this.articleController.searchingNews);
    };
    return Routes;
}());
exports.Routes = Routes;
