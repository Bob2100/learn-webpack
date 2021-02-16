const path = require('path');
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
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  }
}