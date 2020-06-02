// import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
  mode: "development",
  entry: "./src/client/index.client.tsx",
  output: {
    path: __dirname + "/dist/client",
    filename: "app.js",
  },
  resolve: {
    // modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", "jsx", ".css", ".json"],
  },
  devServer: {
    contentBase: "./",
    publicPath: "/dist/client",
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
    // plugins: [
    //   // 기타 플러그인
    //   new MiniCssExtractPlugin({ filename: "[name].css" }),
    // ],
  },
};
