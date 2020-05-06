import { Request, Response, Application } from "express";
import { Controller } from "../controllers/nodes-controller";

export class Routes {
  public controller: Controller = new Controller();

  public routes(app: Application): void {
    app.route("/").get(this.controller.index);
  }
}
