import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import { runInNewContext } from "vm";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { createBrotliCompress } from "zlib";

dotenv.config();
const secret: string | undefined = process.env.secret;

export default class UserController {
  // 로그인 함수
  public async signin(req: Request, res: Response) {
    const { mail, password } = req.body;
    console.log(mail, password);

    const compare = (data: IUserSchema | null) => {
      if (data) {
        console.log(data);
        data.comparePassword(password, (err: Error, isMatch: Boolean) => {
          if (err) throw new Error.messages();

          if (isMatch) {
            let token = jwt.sign(
              { id: data.id, email: data.email },
              String(secret),
              {
                expiresIn: "2day",
              }
            );

            res.set("jwt-token", token).status(200).json({
              token: token,
              message: "로그인이 되었습니다.",
            });
          } else {
            res.status(409).send("비밀번호가 틀렸습니다.");
          }
        });
      } else {
        res.status(404).send("가입된 유저가 없습니다.");
      }
    };

    const onError = (err: Error) => {
      res.status(404).json({
        message: err.message,
      });
      console.log(err.message);
    };

    await user.findOne({ mail: mail }).then(compare).catch(onError);
  }

  // 회원가입 함수
  public async signup(req: Request, res: Response) {
    const { mail, password } = req.body;
    console.log(mail, password);

    const create = (data: IUserSchema | null): void => {
      if (data) res.status(404).send("이미 가입되어 있습니다.");
      else {
        let newUser = new user({
          mail: mail,
          password: password,
        });

        newUser.save((err, result) => {
          if (err) throw err.message("회원가입이 실패했습니다.");
          // console.log(result);

          let token = jwt.sign(
            { id: result.id, email: result.email },
            String(secret),
            {
              expiresIn: "2day",
            }
          );

          res.set("jwt-token", token).status(200).json({
            token: token,
            message: "회원가입 되었습니다.",
          });
        });
      }
    };

    const onError = (err: Error) => {
      res.status(409).json({
        message: err.message,
      });
      console.log(err.message);
    };

    await user.findOne({ mail: mail }).then(create).catch(onError);
  }
}
