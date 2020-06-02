import { Request, Response, Application } from "express";
import ArticleController from "../controllers/article-controller";
import UserController from "../controllers/user-controller";

export class Routes {
  public userController: UserController = new UserController();
  public articleController: ArticleController = new ArticleController();

  public routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send("main page");
    });
    app.route("/signin").post(this.userController.signin);
    app.route("/signup").post(this.userController.signup);
    // app.route("/search").get(this.articleController.naverNews);
    app.route("/search").get(this.articleController.googleNews);
  }
}
