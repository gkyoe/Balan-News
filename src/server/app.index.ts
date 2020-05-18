import express, { Request, Response, Router } from "express";
import bodyParser from "body-parser";
import { Routes } from "./config/routes";
import morgan from "morgan";

class App {
  public app: express.Application;
  public route: Routes = new Routes();
  // http://rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
  }
}

export default new App().app;
