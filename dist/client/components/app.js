"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var axios_1 = __importDefault(require("axios"));
var login_1 = __importDefault(require("./login"));
var signup_1 = __importDefault(require("./signup"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.componentDidMount = function () {
        axios_1.default
            .get("http://localhost:3000")
            .then(function (res) {
            console.log("clinet server is running!");
        })
            .catch(function (err) {
            throw err.message;
        });
    };
    //   increase = () => {
    //     const { count } = this.state;
    //     this.setState({ count: count + 1 });
    //   };
    App.prototype.render = function () {
        // const { name } = this.props;
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("header", null,
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement("button", null, "Home")),
                React.createElement(react_router_dom_1.Link, { to: "/signin" },
                    React.createElement("button", null, "\uB85C\uADF8\uC778")),
                React.createElement(react_router_dom_1.Link, { to: "/signup" },
                    React.createElement("button", null, "\uD68C\uC6D0\uAC00\uC785")),
                React.createElement("h1", null, "Balan News")),
            React.createElement("hr", null),
            React.createElement("main", null,
                React.createElement(react_router_dom_1.Route, { path: "/signin", component: login_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/signup", component: signup_1.default }))));
    };
    return App;
}(React.Component));
exports.App = App;
