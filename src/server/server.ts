import app from "./app.index";
import mongoose from "mongoose";
import "dotenv";
import * as models from "./models";

const { MONGO_USER, MONGO_PASSWORD } = process.env;

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("server is running");
  try {
    await mongoose.connect(`mongodb://balan:kyo@localhost:27017/balanNews`, {
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
