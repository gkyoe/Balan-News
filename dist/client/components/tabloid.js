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
var newsBody_1 = __importDefault(require("./newsBody"));
require("./searchBar.css");
var Tabloid = /** @class */ (function (_super) {
    __extends(Tabloid, _super);
    function Tabloid(props) {
        var _this = _super.call(this, props) || this;
        _this.requestCrawlingNews = function (apiCollection) {
            axios_1.default.post("http://localhost:3000/loadNews", { data: apiCollection }).then(function (response) {
                // if (response.status === 200) {
                console.log("response: ", response);
                // } else {
                //   //
                // }
            }, function (error) { return console.log("여기 에러인가?: ", error); });
        };
        _this.state = {};
        _this.requestCrawlingNews = _this.requestCrawlingNews.bind(_this);
        return _this;
    }
    Tabloid.prototype.render = function () {
        var _this = this;
        return (React.createElement("ul", null, this.props.news.map(function (data, idx) {
            _this.requestCrawlingNews(data);
            // console.log(this.crawlingNews(data.link));
            return (React.createElement("div", null,
                React.createElement(newsBody_1.default, { news: data, key: idx + 100 })));
        })));
    };
    return Tabloid;
}(React.Component));
exports.default = Tabloid;
