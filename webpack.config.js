const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tabnotifier.min.js',
    library: 'tabNotifier',
    libraryExport: 'default',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
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