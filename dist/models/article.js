"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1.Schema({
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
