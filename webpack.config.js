const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // 绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          // 静态资源
          loader: 'url-loader',//可以处理file-loader能处理的所有事情，区别是把图片编译成base64字符串存在js里
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'pics/',
            //小于1KB才转成base64
            limit: 1024
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'http://localhost:9000'
      },
    },
    hot: true,
  },
  devtool: 'eval-cheap-module-source-map',
  // enable source code map
  mode: 'development'
}