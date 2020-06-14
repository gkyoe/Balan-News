"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var app_1 = require("./components/app");
var react_router_dom_1 = require("react-router-dom");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(app_1.App, null)), document.getElementById("root"));
