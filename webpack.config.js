const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const dest = process.env.DOCS ? 'docs/assets/natural-gallery-js' : 'dist';

const client = {
    mode: 'production',
    devtool: "source-map",
    output: {
        path: path.join(__dirname, dest),
        library: "NaturalGallery",
        filename: 'natural-gallery.js',
        libraryTarget: 'umd',
        globalObject: 'this', // Use 'this', instead of default 'self', because the same code will run on both browsers and Node.js
        umdNamedDefine: true
    },
    resolveLoader: {modules: [path.join(__dirname, 'node_modules')]},
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: {
        'photoswipe': {
            commonjs: 'photoswipe',
            commonjs2: 'photoswipe',
            amd: 'photoswipe',
            root: 'PhotoSwipe'
        },
        'photoswipe/dist/photoswipe-ui-default': {
            commonjs: 'photoswipe/dist/photoswipe-ui-default',
            commonjs2: 'photoswipe/dist/photoswipe-ui-default',
            amd: 'photoswipe/dist/photoswipe-ui-default',
            root: 'PhotoSwipeUI_Default'
        },
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ],
    },
    plugins: [
        new webpack.WatchIgnorePlugin({paths: [/\.d\.ts$/]}),
        new MiniCssExtractPlugin({filename: 'natural-gallery.css'}),
        new CopyPlugin({
            patterns: [
                {from: 'package.json'},
                {
                    from: 'src/styles/themes',
                    to: 'themes',
                },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            }
        ]
    },
};

module.exports = client;
