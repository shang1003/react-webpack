const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/core/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 8088,
    historyApiFallback: true, //history router
    static: {
      directory: path.join(__dirname, "/dist/index.html"),
    },
    proxy: {
      //本地代理
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: { "^/api": "" },
      },
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, //导出 css模块
            },
          },
        ],
      },
      {
        test: /\.(less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader",
            options: {
              modules: true, //导出 css模块
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
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
    alias: {
      pages: __dirname + "/src/pages",
      "@": __dirname + "/src",
      styles: __dirname + "/src/styles",
      layouts: __dirname + "/src/layouts",
      utils: __dirname + "/src/utils",
      components: __dirname + "/src/components",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      //以什么模板打包成html
      template: path.join(__dirname, "./src/index.html"),
      title: "BS", //标题
    }),
  ],
};
