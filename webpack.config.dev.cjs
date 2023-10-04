const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].js',
    clean: true
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset',
      generator: {
        filename: 'images/[hash].[ext]'
      },
      parser:{
        dataUrlCondition:{
          maxSize: 1024
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map'
};
