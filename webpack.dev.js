const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'eval',
  entry: './app.js',
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
  plugins: [
    new NodemonPlugin(),
    new CleanWebpackPlugin(['dist/*']),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.dev.js'
  },
};