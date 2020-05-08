"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
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
});
exports.UserModel = mongoose_1.model("IUser", UserSchema);
