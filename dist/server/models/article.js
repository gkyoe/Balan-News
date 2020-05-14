"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = void 0;
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1.Schema({
    id: [
        {
            ref: "UserModel",
            type: mongoose_1.Schema.Types.ObjectId,
        },
    ],
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    journalist: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    good: {
        type: Number,
        required: false,
    },
    bad: {
        type: Number,
        required: false,
    },
});
exports.ArticleModel = mongoose_1.model("ArticleModel", ArticleSchema);
