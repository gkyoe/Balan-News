import { Request, Response, Application } from "express";
import { Controller } from "../controllers/nodes-controller";

export class Routes {
  public controller: Controller = new Controller();

  public routes(app: Application): void {
    app.route("/").get(this.controller.index);
    app.route("/login").get(this.controller.login);
    app.route("/signup").get(this.controller.signup);
    app.route("/logout").get(this.controller.logout);
  }
}
