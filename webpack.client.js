
// to load sass files at refresh
// require.extensions['.scss'] = () => {
//     return;
// };
// require.extensions['.css'] = () => {
//     return;
// };
let fs = require('fs')
let path = require('path');
let webpack = require('webpack');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let _ = require('lodash');
let config = require('./src/config');
let env = config.env;
let ip = config.ip;
let host = config.host;

let HtmlWebpackPlugin = require('html-webpack-plugin');
let plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({filename: 'assets/css/[name].css', disable: false, allChunks: false}),
    new HtmlWebpackPlugin({
        template: 'index.ejs',
        filename: 'views/index.ejs',
        inject: 'body'
    }),
];

if (env === 'production') {

} else if (env === 'development') {

    plugins = [
        ...plugins,
        // new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false}),
        // new webpack.NoEmitOnErrorsPlugin(),
        new BrowserSyncPlugin({
            host: ip, // 'localhost',
            port: 3000,
            proxy: host, // 'http://localhost:4000',
            open: false
        })
    ];

} else if (env === 'test') {
//     plugins = _.initial(plugins);
}




module.exports = {
    context: path.join(__dirname, './src'),
    resolve: {
        extensions: ['.tsx', '.js']
    },
    devtool: 'source-map',
    target: 'web',
    entry: './client.js',
    output: {
        path: path.join(__dirname, 'dist', 'public'),
        filename: 'assets/js/[name].js',
        chunkFilename: '[chunkhash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader?sourceMap', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpeg|woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: plugins
};