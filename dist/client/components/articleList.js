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
        return _super.call(this, props) || this;
        // this.state = {
        //   count: 0,
        // };
        // this.onCheckChange = this.onCheckChange.bind(this);
    }
    // onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    //   const checked = e.target.checked;
    //   const counted = this.state.count;
    //   const limited = this.props.limit;
    //   console.log(
    //     "checked: ",
    //     checked,
    //     " counted: ",
    //     counted,
    //     " limited: ",
    //     limited
    //   );
    //   if (checked && counted >= limited) {
    //     console.log(this.state.count);
    //     alert("최대 3개까지 선택할 수 있습니다.");
    //   } else if (checked && counted < limited) {
    //     console.log("여기에 들어오나?");
    //     console.log(this.state);
    //     this.setState({ count: counted + 1 });
    //   } else if (checked) {
    //     console.log(this.state);
    //     this.setState({ count: counted - 1 });
    //   }
    // }
    ArticleList.prototype.render = function () {
        return (React.createElement("li", { className: "article-title" },
            React.createElement("input", { className: "select-checkbox", type: "checkbox" }),
            this.props.title));
    };
    return ArticleList;
}(React.Component));
exports.default = ArticleList;
