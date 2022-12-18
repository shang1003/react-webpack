/*
 * @Author: bishang 1063352967@qq.com
 * @Date: 2022-11-05 10:18:26
 * @LastEditors: bishang 1063352967@qq.com
 * @LastEditTime: 2022-12-01 09:33:37
 * @FilePath: \demo\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

   entry: './src/index.js',
   output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
   },
   devServer: {
      host:"192.168.31.179",
      port: 8088,
      static:{
        directory:path.join(__dirname, '/dist/index.html')
      }
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
         {
            test: /\.less$/,
            use: [ 'style-loader', 'css-loader' ,"less-loader"]
        },
         {
          test: /\.(png|jpg)/,
          type: 'asset/resource'
        }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')
       }) 
   ]
}