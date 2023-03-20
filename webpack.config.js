const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 8088,
    static: {
      directory: path.join(__dirname, "/dist/index.html"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      //   {
      //    test: /\.tsx?$/,
      //    exclude: /node_modules/,
      //    loader: 'ts-loader'
      //  }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".tsx", ".ts"], //表示这几个文件的后缀名可以省略不写
  },
  plugins: [
    new HtmlWebpackPlugin({
      //以什么模板打包成html
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
};
