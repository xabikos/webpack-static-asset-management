var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,        
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
        exclude: /node_modules/
      },
      {
        test: /\.png/,
        loader: "url?limit=10000&minetype=image/png"
      }
    ]
  },
  plugins: [    
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  postcss: function () {
    return [autoprefixer];
  }
};
