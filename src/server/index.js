// import express from 'express';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';

// import devConfig from '../build/webpack.config.dev';
// import prodConfig from '../build/webpack.config.prod';
// // const isDev = process.env.NODE_DEV !== 'production'
// const isDev = true;
// const config = isDev ? devConfig : prodConfig;
// const compiler = webpack(config);
// const app = express();

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   noInfo: true,
//   stats: {
//     colors: true,
//   },
// }));

// if (isDev) {
//   app.use(require("webpack-hot-middleware")(compiler));
// }

// app.listen(3000, () => {
//   console.log('Application is listening on port: 3000!\n');
// });
