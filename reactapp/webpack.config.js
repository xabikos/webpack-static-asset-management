var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ["style", "css", "postcss", "sass"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: "url?limit=10000&minetype=image/png"
      }
    ]
  },
  devtool: 'source-map',
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
  postcss: function () {
    return [autoprefixer];
  }
};
