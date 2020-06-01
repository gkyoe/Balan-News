"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./config/routes");
var morgan_1 = __importDefault(require("morgan"));
var App = /** @class */ (function () {
    // http://rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html
    function App() {
        this.route = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.route.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
    };
    return App;
}());
exports.default = new App().app;
