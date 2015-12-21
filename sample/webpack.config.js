var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        exclude: /node_modules/
      }
    ]
  }
};
