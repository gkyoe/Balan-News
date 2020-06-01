"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
// interface LogProps {
//   btn: string;
// }
// const pushSignin = () => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:8080/signin`,
//   });
// };
// const pushSignup = () => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:8080/signup`,
//   });
// };
var LogInOut = function () {
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "/signin" },
            React.createElement("button", { id: "signin" }, "\uB85C\uADF8\uC778")),
        React.createElement(react_router_dom_1.Link, { to: "/signup" },
            React.createElement("button", { id: "signup" }, "\uD68C\uC6D0\uAC00\uC785"))));
};
exports.default = LogInOut;
