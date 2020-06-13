import app from "./app.index";
import mongoose from "mongoose";
import path from "path";
import * as dotenv from "dotenv";
import * as models from "./models";

const { MONGO_PRODUCT, MONGO_DEV, MONGO_USER, MONGO_PASSWORD } = process.env;
const port = process.env.PORT || 3000;

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == "production" ? ".env" : ".dev.env"
  ),
});

app.listen(port, async () => {
  console.log("server is running");
  try {
    await mongoose.connect(`${MONGO_DEV}`, {
      // dbName: "balanNews",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("몽고디비 연결 성공!");
  } catch (error) {
    throw error.message;
    console.log("몽고디비 연결 에러");
  }
});
