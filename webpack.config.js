const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? 'source-map' : null,
    entry: {
        bundle: './src/app'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: debug ? './js/[name].js' : './js/[name].min.js',
        publicPath: '/static'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:  /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader:  'style!css'
            },
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract('style', `css?modules&localIdentName=${debug ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]_[hash:base64:3]_[hash:base64:1]'}!sass`)
            }
        ]
    },
    plugins: debug ? 
    [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('./css/[name].css', {allChunks: true})
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new ExtractTextPlugin('./css/[name].min.css', {allChunks: true}),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.scss'],
        alias: {
            bourbon: path.join(__dirname, '/node_modules/bourbon/app/assets/stylesheets/_bourbon.scss'),
            normalize: path.join(__dirname, '/node_modules/normalize.css'),
            main: path.join(__dirname, '/src/scss/main.scss')
        }
    }
};