import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ArticleModel } from "./article";

interface IUserSchema extends Document {
  name: string;
  gender: string;
  mail: string;
  password: string;
  interest?: string;
  saved_articles?: Types.Array<string>;
}

const UserSchema = new Schema(
  {
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
    scrap: [
      {
        ref: "ArticleModel",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUserSchema>("UserModel", UserSchema);
