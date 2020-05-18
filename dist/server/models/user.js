"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    mail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    inter_press: {
        type: [String],
        required: false,
    },
    scrap: [
        {
            ref: "ArticleModel",
            type: mongoose_1.Schema.Types.ObjectId,
            required: false,
        },
    ],
}, {
    timestamps: true,
});
exports.user = mongoose_1.model("user", UserSchema);
// model의 첫번째 인자는 컬렉션의 이름,
