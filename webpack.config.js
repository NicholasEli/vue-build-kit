var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './babel/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            include: [path.resolve(__dirname, 'babel/script.js')],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-3']
            }
        }, {
            test: /\.scss$/,
            include: [path.resolve(__dirname, 'sass/style.scss')],
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};