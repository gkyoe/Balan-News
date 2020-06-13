import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import axios from "axios";
import * as jwt from "jsonwebtoken";
import urlencode from "urlencode";
import bcrypt from "bcrypt";
import path from "path";
import * as dotenv from "dotenv";
import { request } from "http";

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == "production" ? ".env" : ".dev.env"
  ),
});
const secret: string | undefined = process.env.secret;

export default class articleController {
  public async naverNews(req: Request, res: Response) {
    const encoded = urlencode(req.body.data);
    console.log(encoded); //%EB%82%A0%EC%94%A8
    const limit = 5;

    const api_url = `https://openapi.naver.com/v1/search/news.json?query=${encoded}&display=${limit}&start=1&sort=sim`;
    const client_id = process.env.naverNewsApi_id;
    const client_scret = process.env.naverNewsApi_ScretKey;

    const options = {
      // url: api_url,
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_scret,
      },
    };
    // https://openapi.naver.com/v1/search/news.json?query=%EB%82%A0%EC%94%A8
    await axios
      .get(api_url, options)
      .then((result) => {
        res.status(200).json(result.data);
        console.log("data: ", result.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
}
