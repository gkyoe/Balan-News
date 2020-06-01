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
var React = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_router_dom_1 = require("react-router-dom");
var LogIn = /** @class */ (function (_super) {
    __extends(LogIn, _super);
    function LogIn(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeMail = function (event) {
            // const { name, value } = event.target;
            _this.setState({ mail: event.target.value });
            console.log(_this.state);
        };
        _this.handleChangePassword = function (event) {
            // const { name, value } = event.target;
            _this.setState({ password: event.target.value });
            console.log(_this.state);
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            var user = {
                mail: _this.state.mail,
                password: _this.state.password,
            };
            console.log(user);
            axios_1.default.post("http://localhost:3000/signin", user).then(function (res) {
                console.log(res.data);
                if (res.status === 200) {
                    _this.setState({ isLogin: true });
                }
            });
        };
        _this.state = {
            mail: "",
            password: "",
            isLogin: false,
        };
        _this.handleChangeMail = _this.handleChangeMail.bind(_this);
        _this.handleChangePassword = _this.handleChangePassword.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    LogIn.prototype.render = function () {
        if (this.state.isLogin) {
            return React.createElement(react_router_dom_1.Redirect, { to: "/" });
        }
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "mail:",
                React.createElement("input", { name: "mail", type: "text", value: this.state.mail, onChange: this.handleChangeMail }),
                "password:",
                React.createElement("input", { name: "password", type: "password", value: this.state.password, onChange: this.handleChangePassword })),
            React.createElement("button", { type: "submit" }, "\uB85C\uADF8\uC778")));
    };
    return LogIn;
}(React.Component));
exports.default = LogIn;
