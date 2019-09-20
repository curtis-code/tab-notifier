const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tabnotifier.min.js',
    library: 'tabNotifier',
    libraryExport: 'default',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.js',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
