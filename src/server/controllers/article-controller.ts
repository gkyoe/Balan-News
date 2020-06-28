import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import axios from "axios";
import cheerio from "cheerio";
import * as jwt from "jsonwebtoken";
import rp from "request-promise";
import urlencode from "urlencode";
import bcrypt from "bcrypt";
// import { Iconv } from "iconv";
var Iconv = require("iconv").Iconv;
import jschardet from "jschardet";
import path from "path";
import * as dotenv from "dotenv";
import { request } from "http";

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == "production" ? ".env" : ".dev.env"
  ),
});

// declare module 'axios' {
//   export interface AxiosRequestConfig {
//     responseEncoding: string;
//   }
// }

const secret: string | undefined = process.env.secret;

interface Article {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export default class articleController {
  public async naverNews(req: Request, res: Response) {
    function accessNaverApi(request: Request) {
      const encoded = urlencode(request.body.data);
      console.log(encoded); //%EB%82%A0%EC%94%A8
      const limit = 5;
      const api_url = `https://openapi.naver.com/v1/search/news.json?query=${encoded}&display=${limit}&start=1&sort=sim`;
      const client_id = process.env.naverNewsApi_id;
      const client_scret = process.env.naverNewsApi_ScretKey;

      const options = {
        headers: {
          "X-Naver-Client-Id": client_id,
          "X-Naver-Client-Secret": client_scret,
        },
      };

      return axios
        .get(api_url, options)
        .then((result: any) => {
          // console.log("result.data.items: ", result.data.items);
          return result.data.items;
        })
        .catch((err) => {
          throw err.message;
        });
    }

    function anyToUtf8(str: Buffer) {
      const { encoding } = jschardet.detect(str);
      console.log("source encoding = " + encoding);
      const iconv = new Iconv(encoding, "utf-8//translit//ignore");
      return iconv.convert(str).toString();
    }

    function crawlingNewsBody(apiResource: Array<Article>) {
      let linkArr: {}[] = [];
      apiResource.forEach((api) => {
        console.log("link: ", api.link);
        rp({
          url: api.link,
          encoding: null,
        })
          // axios
          //   .get(api.link, {
          //     responseType: "arraybuffer",
          //     responseEncoding: "binary",
          //   })
          //   .then((response) => console.log("responce: ", response));
          .then(anyToUtf8)
          .then((html) => {
            let $ = cheerio.load(html);
            let src = $("div.press_logo").children("img").attr("src");
            let articleTitle = $("h3#articleTitle").text();
            let articleBodyContents = $("div#articleBodyContents").text();
            console.log("src: ", src);
            console.log("articleTitle: ", articleTitle);
            console.log("articleBodyContents: ", articleBodyContents);
          })
          .catch((err) => {
            console.log("에러입니당");
            console.log(err.message);
          });
      });
    }
    try {
      const apiData: Array<Article> = await accessNaverApi(req);
      console.log("apiData: ", apiData);
      const url: any = await crawlingNewsBody(apiData);
      console.log("url: ", url);
    } catch (error) {
      console.log("여기서 에러입니당");
      throw error;
    }
  }
}
