import { Request, Response } from "express";

export class Controller {
  public index(req: Request, res: Response) {
    res.status(200);
    res.send("Hello world");
  }

  public login(req: Request, res: Response) {
    res.status(200);
    res.send("plz login!");
  }

  public signup(req: Request, res: Response) {
    res.status(200);
    res.send("plz signup!");
  }

  public logout(req: Request, res: Response) {
    res.status(200);
    res.send("See you again!");
  }
}
