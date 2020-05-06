import express from "express";
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
//rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html

// http: require("dotenv").config();
// const env = process.env.NODE_ENV || "development";
// console.log(env);

// if (process.env.NODE_ENV !== "test") {
//   app.use(morgan("dev"));
// }

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Hello World!");
// });

export default new App().app;
