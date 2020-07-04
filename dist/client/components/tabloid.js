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
var newsBody_1 = __importDefault(require("./newsBody"));
require("./searchBar.css");
var Tabloid = /** @class */ (function (_super) {
    __extends(Tabloid, _super);
    function Tabloid(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            upadateNews: [],
        };
        return _this;
        // this.requestCrawlingNews = this.requestCrawlingNews.bind(this);
    }
    // requestCrawlingNews = (apicollection: Article) => {
    //   axios
    //     .post(`http://localhost:3000/loadNews`, apicollection)
    //     .then((response) => {
    //       return response.data;
    //     })
    //     .then((value) => {
    //       this.setState({ ...this.state, upadateNews: value });
    //     })
    //     .catch((error) => error.message);
    // };
    // componentWillReceiveProps(props: tabloidProps) {
    //   console.log("실행은 되나?");
    //   props.news.map((el) => {
    //     this.requestCrawlingNews(el);
    //   });
    // }
    // public async componentWillReceiveProps() {
    //   console.log("+++++++componentDidMount is working+++++++");
    //   let arr: Array<tabloidProps> = [];
    //   await this.props.news.map((el) => {
    //     axios
    //       .post(`http://localhost:3000/loadNews`, el)
    //       .then((response) => {
    //         if (response.status === 200) {
    //           console.log("getDerivedStateFromProps status is 200");
    //           console.log("response data is: ", response.data);
    //           // this.setState((prevState: tabloidState) => {
    //           //   upadateNews: [...prevState.upadateNews, response.data];
    //           // });
    //           arr.push(response.data);
    //           return response.data;
    //         } else {
    //           console.log("getDerivedStateFromProps return null");
    //           return null;
    //         }
    //       })
    //       .catch((error) => error.message);
    //   });
    //   // await this.setState((prevState: tabloidState) => {
    //   //   upadateNews: [...prevState.upadateNews, arr];
    //   // });
    //   const print = (val: Array<tabloidProps>) => {
    //     return {
    //       upadateNews: val,
    //     };
    //   };
    //   await print(arr);
    // }
    Tabloid.prototype.render = function () {
        return (React.createElement("ul", null, this.props.news.map(function (data, idx) {
            // let crawlingData = this.requestCrawlingNews(data);
            // console.log(this.crawlingNews(data.link));
            return (React.createElement("div", null,
                React.createElement(newsBody_1.default, { news: data, key: idx + 100 })));
        })));
    };
    return Tabloid;
}(React.Component));
exports.default = Tabloid;
