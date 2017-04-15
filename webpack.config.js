var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.coffee',
  output: { filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.coffee$/,
        loader: "coffee-loader" 
      }
    ]
  },
};
