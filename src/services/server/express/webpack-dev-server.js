import webpackConfig from '../../../../webpack.client';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
let compiler = webpack(webpackConfig);
let options = {
    publicPath: webpackConfig.output.publicPath,
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

export default app => { // // only in development
    app.use(webpackDevMiddleware(compiler, options));
    app.use(webpackHotMiddleware(compiler));
}