import { Request, Response } from "express";
import mongoose from "mongoose";
import * as User from "../models/user";
import { runInNewContext } from "vm";

export default class UserController {
  public async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(email, password);
    // res.status(200).send("ok done!");
    try {
      await User.UserModel.find()
        .exists(email, true)
        .then((result) => {
          if (result) res.status(409).send("이미 가입한 유저입니다.");
          else {
            User.UserModel.create({
              email,
              password,
            });
          }
        })
        .then((check: void) => {
          res.json(check).status(200);
        })
        .catch((err: Error) => {
          throw err;
        });
    } catch {
      (err: Error) => {
        throw err;
      };
    }
  }
}
