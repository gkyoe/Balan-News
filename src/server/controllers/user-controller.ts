import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { user, IUserSchema } from "../models/user";
import { runInNewContext } from "vm";
import { useReducer } from "react";

export default class UserController {
  // 로그인 함수
  public async signin(req: Request, res: Response) {
    const { mail, password } = req.body;
    console.log(mail, password);

    const check = (data: IUserSchema | null) => {
      if (data) {
        res.status(200).send("로그인 되었습니다.");
      } else {
        throw new Error("가입된 유저가 아닙니다.");
      }
    };

    const onError = (err: Error) => {
      res.status(404).json({
        message: err.message,
      });
      console.log(err.message);
    };

    await user
      .findOne({ mail: mail, password: password })
      .then(check)
      .catch(onError);
  }

  // 회원가입 함수
  public async signup(req: Request, res: Response) {
    const { mail, password } = req.body;
    console.log(mail, password);
    // res.status(200).send("ok done!");

    const create = (data: IUserSchema | null): Promise<IUserSchema> => {
      if (data) {
        throw new Error("username exists");
      } else {
        return user.create({ mail: mail, password: password });
      }
    };

    const check = (data: IUserSchema) => {
      if (data) {
        res.status(200).send("회원가입이 완료되었습니다!");
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
