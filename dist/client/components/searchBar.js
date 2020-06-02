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
var articleList_1 = __importDefault(require("./articleList"));
require("./searchBar.css");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeKeyword = function (event) {
            // const { name, value } = event.target;
            _this.setState({ keyword: event.target.value });
            console.log(_this.state);
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            var keyword = _this.state.keyword;
            axios_1.default
                .post("http://localhost:3000/naverNews", { data: keyword })
                .then(function (res) {
                console.log(res.data);
                _this.setState({ articles: res.data.items });
            })
                .then(function (err) {
                throw err;
            });
        };
        _this.state = {
            keyword: "",
            articles: [],
            sidebarOpen: false,
        };
        _this.handleChangeKeyword = _this.handleChangeKeyword.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.onSetSidebarOpen = _this.onSetSidebarOpen.bind(_this);
        return _this;
    }
    SearchBar.prototype.onSetSidebarOpen = function (open) {
        this.setState({ sidebarOpen: open });
    };
    SearchBar.prototype.render = function () {
        return (
        //   <div className="search-Zone">
        React.createElement(React.Fragment, null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("input", { className: "searchbar", name: "searchbar", type: "text", placeholder: "\uD0A4\uC6CC\uB4DC\uB97C \uAC80\uC0C9\uD558\uC138\uC694.", value: this.state.keyword, onChange: this.handleChangeKeyword }),
                React.createElement("button", { className: "searchBtn", type: "submit" }, "\uAC80\uC0C9")),
            React.createElement("div", { className: "newsList" },
                React.createElement("ul", null, this.state.articles.map(function (contact, i) {
                    return React.createElement(articleList_1.default, { title: contact.title, key: i });
                }))))
        //   </div>
        );
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
