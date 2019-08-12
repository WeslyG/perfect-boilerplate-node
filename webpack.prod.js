const path = require('path');

module.exports = {
  mode: 'production',
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
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.prod.js'
  },
};
