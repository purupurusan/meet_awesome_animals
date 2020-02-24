// eslint-disable-next-line @typescript-eslint/no-unused-vars
import webpack from "webpack";
import path from "path";
import Dotenv from "dotenv-webpack";

export default {
  mode: "development",
  entry: ["webpack-hot-middleware/client", path.resolve(__dirname, "src/")],
  target: "node",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        },
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [new Dotenv({ systemvars: true })],
  node: {
    fs: "empty"
  }
};
