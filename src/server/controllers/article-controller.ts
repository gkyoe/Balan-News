import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import axios from "axios";
import * as jwt from "jsonwebtoken";
import urlencode from "urlencode";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { request } from "http";

dotenv.config();
const secret: string | undefined = process.env.secret;

export default class articleController {
  public async select(req: Request, res: Response) {
    const subject = "날씨";
    const encoded = urlencode(subject);
    console.log(encoded); //%EB%82%A0%EC%94%A8

    const api_url = `https://openapi.naver.com/v1/search/news.json?query=${encoded}`;
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
      .get(
        `https://openapi.naver.com/v1/search/news.json?query=${encoded}`,
        options
      )
      .then((res) => console.log("res.data: ", res.data))
      .catch((err) => {
        console.log("err: ", err);
      });
  }
}
