var webpack = require('webpack');

var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: {
        auth0: [
            // 'webpack-hot-middleware/client',
            './src/index.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js',
        library: 'idtoken-verifier',
        libraryTarget: 'var',
        publicPath: 'http://localhost:3000/'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    progress: true,
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: true
    },
    keepalive: true,
    stats: {
        colors: true,
        modules: true,
        reasons: true
    },
    stylus: {
        preferPathResolver: 'webpack'
    }
    // plugins: [
    //   new webpack.HotModuleReplacementPlugin(),
    //   new webpack.NoErrorsPlugin()
    // ]
};
