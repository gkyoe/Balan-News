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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var user_1 = require("../models/user");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // 로그인 함수
    UserController.prototype.signin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mail, password, compare, onError;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, mail = _a.mail, password = _a.password;
                        compare = function (data) {
                            if (data) {
                                data.comparePassword(password, function (err, isMatch) {
                                    if (err)
                                        throw new mongoose_1.Error.messages();
                                    if (isMatch) {
                                        res.status(200).set("x-token", data.password).json({
                                            data: data,
                                            message: "로그인이 되었습니다.",
                                        });
                                    }
                                    else {
                                        res.status(409).send("비밀번호가 틀렸습니다.");
                                    }
                                });
                            }
                        };
                        onError = function (err) {
                            res.status(404).json({
                                message: err.message,
                            });
                            console.log(err.message);
                        };
                        return [4 /*yield*/, user_1.user.findOne({ mail: mail }).then(compare).catch(onError)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 회원가입 함수
    UserController.prototype.signup = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mail, password, create, onError;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, mail = _a.mail, password = _a.password;
                        console.log(mail, password);
                        create = function (data) {
                            if (data)
                                res.status(404).send("이미 가입되어 있습니다.");
                            else {
                                var newUser = new user_1.user({
                                    mail: mail,
                                    password: password,
                                });
                                newUser.save(function (err, result) {
                                    if (err)
                                        throw err.message("회원가입이 실패했습니다.");
                                    res.status(200).send({
                                        newUser: result,
                                        message: "회원가입 되었습니다.",
                                    });
                                });
                            }
                        };
                        onError = function (err) {
                            res.status(409).json({
                                message: err.message,
                            });
                            console.log(err.message);
                        };
                        return [4 /*yield*/, user_1.user.findOne({ mail: mail }).then(create).catch(onError)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
