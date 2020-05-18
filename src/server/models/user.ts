import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ArticleModel } from "./article";

export interface IUserSchema extends Document {
  mail: string;
  password: string;
  inter_press?: string;
  scrap?: Types.Array<string>;
}

const UserSchema = new Schema(
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

export const user = model<IUserSchema>("user", UserSchema);
// model의 첫번째 인자는 컬렉션의 이름,
