const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tabnotifier.min.js',
    library: 'tabNotifier',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};