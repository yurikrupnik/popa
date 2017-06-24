

let path = require('path');
let nodeExternals = require('webpack-node-externals');
let plugins = [];
module.exports = {
    context: path.join(__dirname, 'src'),
    target: 'node',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: plugins,
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};