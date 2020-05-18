import { Request, Response } from "express";
import mongoose from "mongoose";
import { user, IUserSchema } from "../models/user";
import { runInNewContext } from "vm";
import { useReducer } from "react";

export default class UserController {
  public signup(req: Request, res: Response) {
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

    const check = (data: IUserSchema | Error) => {
      if (data) {
        res.status(200).send("회원가입이 완료되었습니다!");
      }
    };

    const onError = (err: Error) => {
      res.status(409).json({
        message: err.message,
      });
      console.log(err.message);
    };

    user.findOne({ mail: mail }).then(create).then(check).catch(onError);
  }
}
