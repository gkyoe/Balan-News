import { Document, Model, model, Types, Schema, Query } from "mongoose";
import bcrypt from "bcrypt";
import { ArticleModel } from "./article";

const SALT_WORK_FACTOR = 10;

export interface IUserSchema extends Document {
  [x: string]: any;
  mail: string;
  password: string;
  inter_press?: string;
  scrap?: Types.Array<string>;
}

export const UserSchema = new Schema(
  {
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
        type: Schema.Types.ObjectId,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);
// https://stackoverflow.com/questions/46182826/mongoose-hooks-not-working-with-typescript
UserSchema.pre("save", function (this: IUserSchema, next) {
  const _user = this;
  if (!_user.isModified("password")) return next();
  // generate a salt: 솔트값 생성
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt: 해쉬 생성
    bcrypt.hash(_user.password, salt, function (err, hash) {
      if (err) return next(err);
      // _user.password 에 red line 에러 => this 에 IUserSchema 주고 해결
      // https://stackoverflow.com/questions/46182826/mongoose-hooks-not-working-with-typescript

      // override the cleartext password with the hashed one
      _user.password = hash;
      next();
    });
  });
});

// 로그인 시 사용자가 입력한 비밀번호의 해시값이 데이터베이스에 저장된 해시값과 같은지 비교
UserSchema.methods.comparePassword = function (
  candidatePassword: string,
  cb: any
) {
  // bcrypt.compare(비교해볼 문자열, 해사값, 콜백메소드) => 비교해 볼 문자열과 해시 값 같으면 true, 다르면 false
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export const user = model<IUserSchema>("user", UserSchema);
