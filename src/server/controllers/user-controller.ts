import { Request, Response } from "express";
import mongoose from "mongoose";
import * as User from "../models/user";
import { runInNewContext } from "vm";
import { useReducer } from "react";

export default class UserController {
  public async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(email, password);
    // res.status(200).send("ok done!");
    try {
      let checkUser = await User.UserModel.findOne({ email });
      if (checkUser) {
        res.status(204).send("이미 가입한 유저입니다");
      } else {
        let result = await User.UserModel.create({ email, password });
        res.status(200).send(result);
        console.log("성공");
      }
    } catch {
      (err: Error) => {
        throw err;
      };
    }
  }
}
