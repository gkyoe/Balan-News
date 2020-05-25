import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import { runInNewContext } from "vm";
import { useReducer } from "react";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { createBrotliCompress } from "zlib";

dotenv.config();

export default class UserController {
  // 로그인 함수
  public async signin(req: Request, res: Response) {
    const { mail, password } = req.body;

    const compare = (data: IUserSchema | null) => {
      if (data) {
        data.comparePassword(password, (err: Error, isMatch: Boolean) => {
          if (err) throw new Error.messages();
          if (isMatch) {
            res.status(200).set("x-token", data.password).json({
              data: data,
              message: "로그인이 되었습니다.",
            });
          } else {
            res.status(409).send("비밀번호가 틀렸습니다.");
          }
        });
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
          res.status(200).send({
            newUser: result,
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
