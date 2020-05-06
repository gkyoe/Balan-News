import { Request, Response } from "express";

export class Controller {
  public index(req: Request, res: Response) {
    res.status(200);
    res.send("Hello world");
  }
}
