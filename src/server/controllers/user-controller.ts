import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import { runInNewContext } from "vm";
import { useReducer } from "react";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

export default class UserController {
  // 로그인 함수
  public async signin(req: Request, res: Response) {
    const { mail, password } = req.body;
    const token: string = String(
      req.headers["x-access-token"] || req.query.token
    );
    const secret = String(process.env.secret);
    console.log(mail, token);

    const decode = (data: IUserSchema | null) => {
      if (data) {
        bcrypt.compare(data, "hash", (err, res) => {
          if (res) {
            // Passwords match
          } else {
            // Passwords don't match
            throw new Error("가입된 유저가 아닙니다.");
          }
        });
      }
    };

    const check = (decoded: void) => {
      res.status(200).json({ message: "로그인 되었습니다.", info: token });
    };

    const onError = (err: Error) => {
      res.status(404).json({
        message: err.message,
      });
      console.log(err.message);
    };

    await user.findOne({ mail: mail }).then(decode).then(check).catch(onError);
  }

  // 회원가입 함수
  public async signup(req: Request, res: Response) {
    const { mail, password } = req.body;
    console.log(mail, password);
    // res.status(200).send("ok done!");

    const create = (data: IUserSchema | null): string => {
      if (data) {
        throw new Error("username exists");
      } else {
        const secret: string = String(process.env.secret);
        const token = jwt.sign({ mail: mail, password: password }, secret, {
          expiresIn: "7d",
        });
        user.create({ mail: mail, password: token });
        return token;
      }
    };

    const check = (token: string) => {
      if (token) {
        res.status(200).json({ message: "logged in successfully", token });
      } else {
        throw new Error("회원가입이 실패하였습니다.");
      }
    };

    const onError = (err: Error) => {
      res.status(409).json({
        message: err.message,
      });
      console.log(err.message);
    };

    await user.findOne({ mail: mail }).then(create).then(check).catch(onError);
  }
}
