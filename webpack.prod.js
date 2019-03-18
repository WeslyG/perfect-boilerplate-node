const path = require('path');

module.exports = {
  mode: 'production',
  entry: ["@babel/polyfill", "./app.js"],
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.prod.js'
  },
};