"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var SALT_WORK_FACTOR = 10;
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
UserSchema.pre("save", function (next) {
    var _user = this;
    if (!_user.isModified("password"))
        return next();
    // generate a salt
    bcrypt_1.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err)
            return next(err);
        // hash the password using our new salt
        bcrypt_1.default.hash(_user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            // _user.password 에 red line 에러 => this 에 IUserSchema 주고 해결
            // https://stackoverflow.com/questions/46182826/mongoose-hooks-not-working-with-typescript
            // override the cleartext password with the hashed one
            _user.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt_1.default.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};
exports.user = mongoose_1.model("user", UserSchema);
