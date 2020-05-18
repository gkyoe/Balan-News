import app from "./app.index";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as models from "./models";

const { MONGO_USER, MONGO_PASSWORD } = process.env;

const port = process.env.PORT || 3000;

dotenv.config();

app.listen(port, async () => {
  console.log("server is running");
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
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
