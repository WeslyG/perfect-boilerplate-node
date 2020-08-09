const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  watch: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 100,
  },
  devtool: 'inline-source-map',
  entry: ['./app.js'],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      nodeArgs: ['--inspect', '--nolazy'],
    }),
    new Dotenv({
      path: './.env.dev',
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.dev.js',
  },
};
