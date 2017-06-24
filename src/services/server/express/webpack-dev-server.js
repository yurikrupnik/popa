let webpackConfig = require('../../../../webpack.client');
let webpack = require('webpack');
let compiler = webpack(webpackConfig);
//
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let options = {
    publicPath: '/',
    noInfo: true,
    stats: {
        colors: true,
        hash: true,
        timings: true,
        chunks: true,
        chunkModules: true,
        modules: true
    }
};
let middleware = [
    webpackHotMiddleware(compiler),
    webpackDevMiddleware(compiler, options)
];

export default app => {
    app.use(middleware); // only in development
}