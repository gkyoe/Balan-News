"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var cheerio_1 = __importDefault(require("cheerio"));
var request_promise_1 = __importDefault(require("request-promise"));
var urlencode_1 = __importDefault(require("urlencode"));
var jschardet_1 = __importDefault(require("jschardet"));
var path_1 = __importDefault(require("path"));
var dotenv = __importStar(require("dotenv"));
var Iconv = require("iconv").Iconv;
dotenv.config({
    path: path_1.default.resolve(process.cwd(), process.env.NODE_ENV == "production" ? ".env" : ".dev.env"),
});
// declare module 'axios' {
//   export interface AxiosRequestConfig {
//     responseEncoding: string;
//   }
// }
var secret = process.env.secret;
var articleController = /** @class */ (function () {
    function articleController() {
    }
    articleController.prototype.searchKeywords = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var encoded, limit, api_url, client_id, client_scret, options;
            return __generator(this, function (_a) {
                encoded = urlencode_1.default(req.body.data);
                limit = 40;
                api_url = "https://openapi.naver.com/v1/search/news.json?query=" + encoded + "&display=" + limit + "&start=1&sort=sim";
                client_id = process.env.naverNewsApi_id;
                client_scret = process.env.naverNewsApi_ScretKey;
                options = {
                    headers: {
                        "X-Naver-Client-Id": client_id,
                        "X-Naver-Client-Secret": client_scret,
                    },
                };
                return [2 /*return*/, axios_1.default
                        .get(api_url, options)
                        .then(function (result) {
                        // console.log("result.data.items: ", result.data.items);
                        res.send(result.data.items).status(200);
                    })
                        .catch(function (err) {
                        throw err.message;
                    })];
            });
        });
    };
    articleController.prototype.loadNews = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            function anyToUtf8(str) {
                var encoding = jschardet_1.default.detect(str).encoding;
                // console.log("source encoding = " + encoding);
                var iconv = new Iconv(encoding, "utf-8//translit//ignore");
                var encoing = iconv.convert(str).toString();
                return encoing;
            }
            function crawlingNewsBody(link) {
                console.log("====link: ", link);
                var contentLogo = { content: "", logo: "" };
                var binaryData = request_promise_1.default({
                    url: link,
                    encoding: null,
                });
                return binaryData;
            }
            function selectTagData(encodingHtml) {
                var twoDataArr = [];
                var $ = cheerio_1.default.load(encodingHtml);
                console.log("$: ", $);
                var src = $(".press_logo").children("img").attr("src");
                var articleBodyContents = $("div#articleBodyContents").text();
                var articeBody = $("div#articeBody").text();
                var content = articleBodyContents ? articleBodyContents : articeBody;
                // console.log("=-=-=-=-=-=-=content: ", content);
                // console.log("=-=-=-=-=-=-=articleBodyContents: ", articleBodyContents);
                twoDataArr.push(content, src);
                return twoDataArr;
            }
            function LoopLink(apiData) {
                return __awaiter(this, void 0, void 0, function () {
                    var addContentLogoToApi, binaryData, encodingData, crawlingData, resultApi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                addContentLogoToApi = function (obj, valuearr) {
                                    obj["content"] = valuearr[0];
                                    obj["logo"] = valuearr[1];
                                    return obj;
                                };
                                return [4 /*yield*/, crawlingNewsBody(apiData.link)];
                            case 1:
                                binaryData = _a.sent();
                                return [4 /*yield*/, anyToUtf8(binaryData)];
                            case 2:
                                encodingData = _a.sent();
                                return [4 /*yield*/, selectTagData(encodingData)];
                            case 3:
                                crawlingData = _a.sent();
                                return [4 /*yield*/, addContentLogoToApi(apiData, crawlingData)];
                            case 4:
                                resultApi = _a.sent();
                                // }
                                return [2 /*return*/, apiData];
                        }
                    });
                });
            }
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, LoopLink(req.body)];
                    case 1:
                        result = _a.sent();
                        console.log("result: ", result);
                        return [4 /*yield*/, res.send(result).status(200)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("여기서 에러입니당");
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return articleController;
}());
exports.default = articleController;
// let articleTitleH3 = $("h3#articleTitle").text(); // H3 타이틀 제목
// let articleTitleH2 = $("h2").text(); // H2 타이틀 제목
// let articleInfo = $("span.author").children("em").text(); // 기사 날짜
