import { Request, Response } from "express";
import mongoose from "mongoose";
import * as User from "../models/user";

export default class UserController {
  public signup(req: Request, res: Response) {
    const { email, password } = req.body;

    User.UserModel.find()
      .exists(email, true)
      .then((result) => {
        console.log(`${result}님은 이미 가입한 유저입니다.`);
      })
      .catch((err: Error) => {
        throw err;
      });
  }
}
