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
var urlencode_1 = __importDefault(require("urlencode"));
var iconv_lite_1 = __importDefault(require("iconv-lite"));
var path_1 = __importDefault(require("path"));
var dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: path_1.default.resolve(process.cwd(), process.env.NODE_ENV == "production" ? ".env" : ".dev.env"),
});
var secret = process.env.secret;
var articleController = /** @class */ (function () {
    function articleController() {
    }
    articleController.prototype.naverNews = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            function accessNaverApi(request) {
                var encoded = urlencode_1.default(request.body.data);
                console.log(encoded); //%EB%82%A0%EC%94%A8
                var limit = 5;
                var api_url = "https://openapi.naver.com/v1/search/news.json?query=" + encoded + "&display=" + limit + "&start=1&sort=sim";
                var client_id = process.env.naverNewsApi_id;
                var client_scret = process.env.naverNewsApi_ScretKey;
                var options = {
                    // url: api_url,
                    headers: {
                        "X-Naver-Client-Id": client_id,
                        "X-Naver-Client-Secret": client_scret,
                    },
                };
                return axios_1.default
                    .get(api_url, options)
                    .then(function (result) {
                    // console.log("result.data.items: ", result.data.items);
                    return result.data.items;
                })
                    .catch(function (err) {
                    throw err.message;
                });
            }
            function accessNewsUrl(data) {
                console.log("여기는 들어오나?");
                var linkArr = [];
                data.forEach(function (d) {
                    console.log("originallink: ", d.link);
                    axios_1.default
                        .get(d.link)
                        .then(function (html) {
                        var $ = cheerio_1.default.load(html.data, { decodeEntities: false }); //{ decodeEntities: false }
                        // console.log($);
                        var $body = $("div#articleBodyContents").html();
                        if ($body !== null) {
                            var strContents = Buffer.from($body);
                            // iconv = new iconv('euc-kr', 'UTF8')
                            var body = iconv_lite_1.default.decode(strContents, "utf-8").toString;
                            console.log("body; ", body);
                        }
                        // const $body = $("div #main_content")
                        //   .children("div #articleBodyContents")
                        //   .text();
                    })
                        .catch(function (err) {
                        console.log("에러입니당");
                        console.log(err.message);
                    });
                });
            }
            var apiData, url, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, accessNaverApi(req)];
                    case 1:
                        apiData = _a.sent();
                        console.log("apiData: ", apiData);
                        return [4 /*yield*/, accessNewsUrl(apiData)];
                    case 2:
                        url = _a.sent();
                        console.log("url: ", url);
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
