import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { user } from "./user";

interface IArticleSchema extends Document {
  title: string;
  date: string;
  journalist: string;
  body: string;
  good: number;
  bad: number;
}

const ArticleSchema = new Schema({
  id: [
    {
      ref: "UserModel",
      type: Schema.Types.ObjectId,
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

export const ArticleModel = model<IArticleSchema>(
  "ArticleModel",
  ArticleSchema
);
