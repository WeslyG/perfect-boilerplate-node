const path = require('path');

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  entry: ['./app.ts'],
  target: 'node',
  module: {
    rules: [
      {
        test: /\(.ts|.js)$/,
        include: ['/src/', '/**/*.ts'],
        exclude: ['/node_modules/', '/**/*.spec.ts', '/**/*.spec.js'],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.prod.js',
  },
};
