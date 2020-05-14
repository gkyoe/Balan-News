import { Request, Response, Application } from "express";
// import articleController from "../controllers/article-controller";
import UserController from "../controllers/user-controller";

export class Routes {
  public userController: UserController = new UserController();

  public routes(app: Application): void {
    // app.route("/").get(this.controller.index);
    // app.route("/login").get(this.controller.login);
    app.route("/signup").post(this.userController.signup);
    // app.route("/logout").get(this.controller.logout);
  }
}
