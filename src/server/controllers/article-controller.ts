import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import axios from "axios";
import cheerio from "cheerio";
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

interface Article {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export default class articleController {
  public async naverNews(req: Request, res: Response) {
    function accessNaverApi(req: Request) {
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

      let url = axios
        .get(api_url, options)
        .then((result: any) => {
          // console.log("result.data.items: ", result.data.items);
          return result.data.items;
        })
        .catch((err) => {
          throw err.message;
        });
      console.log("url: ", url);
    }

    function accessNewsUrl(data: Array<any>): void {
      let linkArr: string[] = [];
      data.forEach((d) => {
        axios
          .get(d.originallink)
          .then((body) => {
            linkArr.push(body.data);
            console.log(body.data);
          })
          .catch((err) => {
            throw err.message;
          });
      });
    }
    const api: any = await accessNaverApi(req);
    console.log("api: ", api);
    const url: void = await accessNewsUrl(api);
  }

  // result.data.items.forEach((art: Article) => {
  //   console.log("art: ", art);
  //   axios
  //     .get(art.link)
  //     .then((art_body) => {
  //       const html = art_body.data;
  //       // console.log("html: ", html);
  //       const $ = cheerio.load(html);
  //       // console.log("$:", $);
  //       let con = $("div.end_ct_area");
  //       let arr: Array<any> = [];

  //       con.each((i, elm) => {
  //         let itemObj = {
  //           _text: $(elm).find("div.article_body").text(),
  //         };
  //         arr.push(itemObj);
  //       });

  //       arr.forEach((elm) => {
  //         console.log("itemObj: ", elm);
  //       });
  //       // console.log("con: ", con);
  //       console.log("연결은 됨");
  //       return $;
  //     })
  //     .catch((err) => {
  //       console.log("여기 err: ", err);
  //     });
  // });

  // public async crawlingNews(searchingArt: string) {
  //   const accessUrl = (url: string) => {
  //     axios
  //       .get(url)
  //       .then((art) => {
  //         if (art.status === 200) {
  //           const html = art.data;
  //           const $ = cheerio.load(html);
  //           console.log("$: ", $);
  //           console.log("연결은 됨");
  //           return $;
  //         } else {
  //           return console.error("status코드 200아님");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("여기 err: ", err);
  //       });
  //   };

  // let arr = await searchingArt.selectedArticles.map((art) =>
  //   accessUrl(art.link)
  // );
  // await console.log(arr);
  // }

  // public async crawlingNews(req: Request, res: Response) {
  //   await axios
  //     .get(
  //       "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0009913386"
  //     )
  //     .then((data) => {
  //       if (data.status === 200) {
  //         // const html = response.data;
  //         // const $ = cheerio.load(html);
  //         // console.log("$: ", $);
  //         console.log("연결은 됨");
  //         res.status(200).send(data);
  //       } else {
  //         console.log("status코드 200아님");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("여기 err: ", err);
  //     });
  // }
}
