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
  entry: ["./app.js"],
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  "node": "current"
                },
                useBuiltIns: 'usage',
                corejs: {
                  version: 3,
                  proposals: true
                }
              },
            ],
          ]
        }
      }
    }]
  },
  plugins: [
    new NodemonPlugin(),
    new CleanWebpackPlugin(['build/*'])
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.dev.js'
  },
};
