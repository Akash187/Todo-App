const path = require('path');

// noinspection WebpackConfigHighlighting
module.exports = {
  entry: './src/app.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude:/node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  performance: { hints: false }
};