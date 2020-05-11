import app from "./index";
import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_USER, MONGO_PASSWORD } = process.env;

const port = process.env.PORT || 3000;
mongoose.connect(
  `mongodb://localhost:27017/admin`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      throw error.message;
      console.log("몽고디비 연결 에러");
    } else {
      console.log("몽고디비 연결 성공!");
    }
  }
);

app.listen(port, () => {
  console.log("server is running");
});
