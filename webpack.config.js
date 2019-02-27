const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: false,
    port: 3000
  }
};
