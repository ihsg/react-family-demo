const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.comm');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8000',
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: path.join(__dirname, '../../dist'),
    proxy: {
      '/api': 'http://139.196.34.53',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
