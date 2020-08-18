const path = require('path');

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  entry: ['./app.ts'],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|.js)$/,
        exclude: ['/node_modules/', '/**/*.spec.ts', '/**/*.spec.js'],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.prod.js',
  },
};
