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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var newsBody_1 = __importDefault(require("./newsBody"));
require("./searchBar.css");
var Tabloid = /** @class */ (function (_super) {
    __extends(Tabloid, _super);
    function Tabloid(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Tabloid.prototype.render = function () {
        return (React.createElement("ul", null, this.props.news.map(function (data, idx) {
            return (React.createElement("div", null,
                React.createElement(newsBody_1.default, { news: data, key: idx + 100 })));
        })));
    };
    return Tabloid;
}(React.Component));
exports.default = Tabloid;
