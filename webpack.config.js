module.exports = {
  mode: "development",
  entry: "./src/client/index.client.tsx",
  output: {
    path: __dirname + "/dist/client",
    filename: "app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: "./",
    publicPath: "/dist/client",
    inline: true,
    hot: true,
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
