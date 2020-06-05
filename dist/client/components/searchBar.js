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
var articleList_1 = __importDefault(require("./articleList"));
require("./searchBar.css");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        return _super.call(this, props) || this;
        // this.state = {
        //   count: 0;
        // };
        // this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        // this.onCheckChange = this.onCheckChange.bind(this);
    }
    //   onSetSidebarOpen(open: any) {
    //     this.setState({ sidebarOpen: open });
    //   }
    SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "search-Zone" },
            React.createElement(React.Fragment, null,
                React.createElement("form", { onSubmit: this.props.handleSubmitSearching },
                    React.createElement("input", { className: "searchbar", name: "searchbar", type: "text", placeholder: "\uD0A4\uC6CC\uB4DC\uB97C \uAC80\uC0C9\uD558\uC138\uC694.", value: this.props.keyword, onChange: this.props.handleChangeKeyword }),
                    React.createElement("button", { className: "searchBtn", type: "submit" }, "\uAC80\uC0C9")),
                React.createElement("div", { className: "newsList" },
                    React.createElement("ul", { className: "article-list", onChange: this.props.onCheckChange }, this.props.articles.map(function (contact, idx) {
                        return (React.createElement(articleList_1.default, { title: contact.title, key: idx, limit: _this.props.limit, count: _this.props.count }));
                    }))))));
    };
    return SearchBar;
}(React.Component));
exports.default = SearchBar;
// const SearchBar: React.FC = () => {
//   return (
//     <div className="searchBarZone">
//       <input
//         className="searchBar"
//         name="searchbar"
//         type="text"
//         placeholder="키워드를 검색하세요."
//         // value={this.state.mail}
//         // onChange={this.handleChangeMail}
//       />
//       <div className="newList"></div>
//     </div>
//   );
// };
// export default SearchBar;
