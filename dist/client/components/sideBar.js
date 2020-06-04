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
exports.Sidebar = void 0;
var React = __importStar(require("react"));
var searchBar_1 = __importDefault(require("./searchBar"));
require("./sideBar.css");
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   constructor(props: Props) {
    //     super(props);
    //   }
    Sidebar.prototype.render = function () {
        var transform = this.props.transform;
        console.log(transform);
        return (React.createElement("table", null,
            React.createElement("tr", { style: {
                    transform: "translateX(" + this.props.transform + "px)",
                } },
                React.createElement("th", null,
                    React.createElement("div", { className: "side-bar", style: {
                            width: this.props.width,
                            minHeight: this.props.height,
                            transform: "translateX(" + this.props.transform + "px)",
                        } },
                        React.createElement(searchBar_1.default, null))),
                React.createElement("th", null,
                    React.createElement("div", { className: "toggle-bar", style: {
                            width: 50,
                            minHeight: this.props.height,
                        }, onClick: this.props.handleToggle })))));
    };
    return Sidebar;
}(React.Component));
exports.Sidebar = Sidebar;
exports.default = Sidebar;
