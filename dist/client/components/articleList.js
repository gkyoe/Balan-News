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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./articleList.css");
var ArticleList = /** @class */ (function (_super) {
    __extends(ArticleList, _super);
    function ArticleList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
        // this.handleChange = this.handleChange.bind(this);
    }
    ArticleList.prototype.render = function () {
        var _this = this;
        var checkedBox = this.props.checkedBox;
        console.log(checkedBox);
        var articleBody;
        var handleCheck = function (e) {
            var checkCbx = document.querySelectorAll("input[type='checkbox']:checked");
            var slectedArticle = _this.props.news;
            if (e.target.checked) {
                // articleBody = <Tbloid news={this.props.news}></Tbloid>;
                _this.props.addArticleBody(slectedArticle);
            }
            else if (!e.target.checked) {
                _this.props.emptyArticleBody(slectedArticle);
            }
        };
        return (React.createElement("div", null,
            React.createElement("li", { className: "article-title" },
                React.createElement("input", { className: "select-checkbox", type: "checkbox", key: "key", onChange: handleCheck }),
                this.props.news.title),
            articleBody));
    };
    return ArticleList;
}(React.Component));
exports.default = ArticleList;
