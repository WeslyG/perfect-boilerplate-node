const path = require('path');

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  entry: ['./app.js'],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: ['/src/', '/**/*.js'],
        exclude: ['/node_modules/', '/**/*.spec.js'],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.prod.js',
  }
};
