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

    const create = (
      user: User.IUserSchema | null
    ): Promise<User.IUserSchema> => {
      if (user) {
        throw new Error("username exists");
      } else {
        return User.UserModel.create(email, password);
      }
    };
    const onError = (err: Error) => {
      res.status(409).json({
        message: err.message,
      });
      console.log(err.message);
    };

    User.UserModel.findOne({ email, password }).then(create).catch(onError);
  }
}
