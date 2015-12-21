var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ["style", "css", "sass"]
      },
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: "3000",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'templates/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
  ],
};
