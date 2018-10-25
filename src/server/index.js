const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const devConfig = require('../build/webpack.config.dev')
const prodConfig = require('../build/webpack.config.prod')
// const isDev = process.env.NODE_DEV !== 'production'
const isDev = true
const config = isDev ? devConfig : prodConfig
const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

if (isDev) {
  app.use(require("webpack-hot-middleware")(compiler))
}

app.listen(3000, function () {
  console.log('Application is listening on port: 3000!\n')
})