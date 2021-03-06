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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
var React = __importStar(require("react"));
var antd_1 = require("antd");
var axios_1 = __importDefault(require("axios"));
var searchBar_1 = __importDefault(require("./searchBar"));
var tabloid_1 = __importDefault(require("./tabloid"));
require("./sideBar.css");
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider;
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar(props) {
        var _this = _super.call(this, props) || this;
        //toggle bar 클릭 시, searchBar가 접거나 펴거나 한다.
        _this.handleCloseToggle = function (e) {
            e.preventDefault();
            if (_this.state.transform === 0) {
                _this.setState({ transform: -450 });
            }
            else {
                _this.setState({ transform: 0 });
            }
            console.log(_this.state.transform);
        };
        _this.onCollapse = function (collapsed) {
            console.log("collapsed: ", collapsed);
            _this.setState({ collapsed: collapsed });
        };
        //검색을 눌렀을 때, naver news api에 해당 키워드 정보를 요청한다.
        _this.handleSubmitSearching = function () {
            // e.preventDefault();
            var keyword = _this.state.keyword;
            axios_1.default
                .post("http://localhost:3000/searchKeywords", { data: keyword })
                .then(function (res) {
                console.log("res.data", res.data);
                _this.setState({ articles: res.data });
            })
                .then(function () { return _this.emptyArticleBody(); })
                // .then(() => this.crawlingNews())
                .then(function (err) {
                throw err;
            });
            console.log(_this.state.articles);
        };
        //새로운 키워드를 검색했을 때 state의 key를 변경한다.
        _this.handleChangeKeyword = function (event) {
            // const { name, value } = event.target;
            _this.setState({ keyword: event.target.value });
            console.log(_this.state);
        };
        _this.requestCrawlingNews = function (apicollection) {
            axios_1.default.post("http://localhost:3000/loadNews", apicollection).then(function (response) {
                // if (response.status === 200) {
                return response.data;
                console.log("response: ", response.data);
                // } else {
                //   //
                // }
            }, function (error) { return console.log("여기 에러인가?: ", error); });
        };
        // checkbox가 선택됐을 때 해당 기사 정보를 selectedArticles 에 추가한다.
        _this.addArticleBody = function (
        // event: React.ChangeEvent<HTMLInputElement>,
        selectedArticle) {
            _this.setState(function (prevState) { return ({
                // selectedArticles: [...(prevState.selectedArticles ?? []), slectedArticle],
                selectedArticles: __spreadArrays(prevState.selectedArticles, [selectedArticle]),
            }); });
        };
        //checkbox가 해제됐을 때 해당 기사 정보를 selectedArticles 에 제거한다.
        _this.deleteArticleBody = function (data) {
            _this.setState(__assign(__assign({}, _this.state), { selectedArticles: _this.state.selectedArticles.filter(function (art) { return art.originallink !== data.originallink; }) }));
        };
        //새로운 키워드로 검색 시 이미 선택된 article 을 삭제한다.
        _this.emptyArticleBody = function () {
            var checkCbx = document.querySelectorAll("input[type='checkbox']");
            console.log("checkCbx: ", checkCbx);
            checkCbx.forEach(function (cbx) {
                if (cbx.checked) {
                    cbx.checked = false;
                }
            });
            _this.setState(__assign(__assign({}, _this.state), { selectedArticles: [] }));
        };
        _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed,
            });
        };
        _this.state = {
            width: 450,
            height: "100vh",
            transform: 0,
            collapsed: false,
            keyword: "",
            limit: 3,
            count: 0,
            checked: 0,
            articles: [],
            selectedArticles: [],
        };
        _this.handleCloseToggle = _this.handleCloseToggle.bind(_this);
        _this.onCollapse = _this.onCollapse.bind(_this);
        _this.handleSubmitSearching = _this.handleSubmitSearching.bind(_this);
        _this.handleChangeKeyword = _this.handleChangeKeyword.bind(_this);
        _this.addArticleBody = _this.addArticleBody.bind(_this);
        _this.deleteArticleBody = _this.deleteArticleBody.bind(_this);
        _this.emptyArticleBody = _this.emptyArticleBody.bind(_this);
        _this.requestCrawlingNews = _this.requestCrawlingNews.bind(_this);
        return _this;
    }
    Sidebar.prototype.render = function () {
        var transform = this.state.transform;
        console.log(transform);
        return (React.createElement(antd_1.Layout, null,
            React.createElement(Sider, { className: "sider", trigger: null, collapsible: true, collapsed: this.state.collapsed },
                React.createElement(searchBar_1.default, { articles: this.state.articles, keyword: this.state.keyword, limit: this.state.limit, count: this.state.count, handleSubmitSearching: this.handleSubmitSearching, handleChangeKeyword: this.handleChangeKeyword, addArticleBody: this.addArticleBody, deleteArticleBody: this.deleteArticleBody, onCollapse: this.onCollapse, collapsed: this.state.collapsed })),
            React.createElement(antd_1.Layout, { className: "site-layout" },
                React.createElement(Content, null,
                    React.createElement(tabloid_1.default, { news: this.state.selectedArticles })))));
    };
    return Sidebar;
}(React.Component));
exports.Sidebar = Sidebar;
exports.default = Sidebar;
// return (
//   <Layout>
//     <Row>
//     <Sider width={600}>
//       <div
//         className="side-bar"
//         style={{
//           width: this.state.width,
//           minHeight: this.state.height,
//           transform: `translateX(${this.state.transform}px)`, //470
//         }}
//       >
//         <SearchBar
//           articles={this.state.articles}
//           keyword={this.state.keyword}
//           limit={this.state.limit}
//           count={this.state.count}
//           handleSubmitSearching={this.handleSubmitSearching}
//           handleChangeKeyword={this.handleChangeKeyword}
//           addArticleBody={this.addArticleBody}
//           deleteArticleBody={this.deleteArticleBody}
//           onCollapse={this.onCollapse}
//           collapsed={this.state.collapsed}
//         />
//       </div>
//       <div
//         className="toggle-bar"
//         style={{
//           width: 50,
//           minHeight: this.state.height,
//         }}
//         onClick={this.handleCloseToggle}
//       ></div>
//     </Sider>
//     <Tabloid news={this.state.selectedArticles}></Tabloid>
//     </Row>
//   </Layout>
// );
