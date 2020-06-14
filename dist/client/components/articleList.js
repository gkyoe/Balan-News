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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./articleList.css");
var ArticleList = /** @class */ (function (_super) {
    __extends(ArticleList, _super);
    function ArticleList(props) {
        return _super.call(this, props) || this;
        // this.state = {};
        // this.handleChange = this.handleChange.bind(this);
    }
    ArticleList.prototype.render = function () {
        // const checkedBox = this.props.checkedBox;
        // console.log(checkedBox);
        // let articleBody: any;
        var _this = this;
        var handleCheck = function (e) {
            // let checkCbx: NodeListOf<Element> = document.querySelectorAll(
            //   "input[type='checkbox']:checked"
            // );
            var slectedArticle = _this.props.news;
            if (e.target.checked) {
                // articleBody = <Tbloid news={this.props.news}></Tbloid>;
                _this.props.addArticleBody(slectedArticle);
            }
            else if (!e.target.checked) {
                // this.props.emptyArticleBody(() =>
                //   this.props.addArticleBody(slectedArticle)()
                // );
                console.log("!e.target.checked: ", e.target.checked);
                _this.props.reCheckArticleBody(slectedArticle);
            }
        };
        return (React.createElement("div", null,
            React.createElement("li", { className: "article-title" },
                React.createElement("input", { className: "select-checkbox", type: "checkbox", key: "key", onChange: handleCheck }),
                this.props.news.title)));
    };
    return ArticleList;
}(React.Component));
exports.default = ArticleList;
