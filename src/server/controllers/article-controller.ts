import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import axios from "axios";
import cheerio from "cheerio";
import * as jwt from "jsonwebtoken";
import rp from "request-promise";
import urlencode from "urlencode";
import bcrypt from "bcrypt";
import jschardet from "jschardet";
import path from "path";
import * as dotenv from "dotenv";
import { request } from "http";

var Iconv = require("iconv").Iconv;

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
  content: string | undefined;
  logo: string | undefined;
}

// declare function NewsBody(o: Object | null): void;

interface NewsContentLogo {
  content: string | undefined;
  logo: string | undefined;
}

export default class articleController {
  public async searchKeywords(req: Request, res: Response) {
    // await function accessNaverApi(request: Request) {
    const encoded = urlencode(req.body.data);
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
        res.send(result.data.items).status(200);
      })
      .catch((err) => {
        throw err.message;
      });
    // };
  }

  public async loadNews(req: Request, res: Response) {
    // function accessNaverApi(request: Request) {
    //   const encoded = urlencode(request.body.data);
    //   const limit = 5;
    //   const api_url = `https://openapi.naver.com/v1/search/news.json?query=${encoded}&display=${limit}&start=1&sort=sim`;
    //   const client_id = process.env.naverNewsApi_id;
    //   const client_scret = process.env.naverNewsApi_ScretKey;

    //   const options = {
    //     headers: {
    //       "X-Naver-Client-Id": client_id,
    //       "X-Naver-Client-Secret": client_scret,
    //     },
    //   };

    //   return axios
    //     .get(api_url, options)
    //     .then((result: any) => {
    //       // console.log("result.data.items: ", result.data.items);
    //       return result.data.items;
    //     })
    //     .catch((err) => {
    //       throw err.message;
    //     });
    // }

    function anyToUtf8(str: Buffer) {
      const { encoding } = jschardet.detect(str);
      console.log("source encoding = " + encoding);
      const iconv = new Iconv(encoding, "utf-8//translit//ignore");
      const encoing = iconv.convert(str).toString();
      return encoing;
    }

    function crawlingNewsBody(link: string) {
      const contentLogo: NewsContentLogo = { content: "", logo: "" };
      const binaryData = rp({
        url: link,
        encoding: null,
      });
      return binaryData;
    }

    function selectTagData(encodingHtml: string): Array<string | undefined> {
      let twoDataArr: Array<string | undefined> = [];
      let $ = cheerio.load(encodingHtml);
      let src = $(".press_logo").children("img").attr("src");
      let content =
        $("div#articeBody").text() === null
          ? $("div#articleBodyContents").text()
          : $("div#articeBody").text();
      twoDataArr.push(content, src);
      return twoDataArr;
    }

    async function LoopLink(apiData: Article) {
      //  apiResource.forEach((api) => {
      //   let body = crawlingNewsBody(api.link);
      //   console.log("body: ", body);
      //   // api["content"] = body.content;
      //   return api;
      // });
      const addContentLogoToApi = (
        obj: Article,
        valuearr: Array<string | undefined>
      ) => {
        obj["content"] = valuearr[0];
        obj["logo"] = valuearr[1];
        return obj;
      };
      // const naverNewsApi = await accessNaverApi(req);

      // for (let api of apiData) {
      const binaryData = await crawlingNewsBody(apiData.link);
      const encodingData = await anyToUtf8(binaryData);
      const crawlingData = await selectTagData(encodingData);
      const resultApi = await addContentLogoToApi(apiData, crawlingData);
      // }
      return apiData;
    }

    try {
      // const apiData: Array<Article> = await accessNaverApi(req);
      // console.log("apiData: ", apiData);
      const result: Article = await LoopLink(req.body);
      console.log("result: ", result);
      await res.send(result).status(200);
    } catch (error) {
      console.log("여기서 에러입니당");
      throw error;
    }
  }
}
// let articleTitleH3 = $("h3#articleTitle").text(); // H3 타이틀 제목
// let articleTitleH2 = $("h2").text(); // H2 타이틀 제목
// let articleInfo = $("span.author").children("em").text(); // 기사 날짜
