/**
 * Webpack公共配置文件
 */
const webpack = require("webpack"),
    VARIABLE = require("./webpack.variable"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: VARIABLE.entry,

    // 输出文件
    output: {
        path: VARIABLE.output.path,
        filename: VARIABLE.output.filename,
        publicPath: VARIABLE.output.publicPath,
        chunkFilename: VARIABLE.output.filename,
    },

    // 加载器
    module: {
        rules: [
            {
                // TS依赖配置项
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {

                // 文件依赖配置项——字体图标
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: VARIABLE.output.fonts,
                    },
                }],

            }, {

                // 文件依赖配置项——音频、视频
                test: /\.(wav|mp3|ogg|mpeg4|webm)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: VARIABLE.output.media,
                    },
                }],
            }, {

                // 文件依赖配置项——图片
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: VARIABLE.output.limit,
                        name: VARIABLE.output.img,
                    },
                }],
            }
        ]
    },

    // 插件
    plugins: [
        //定义全局变量
        new webpack.ProvidePlugin(VARIABLE.ProvidePlugin),

        // 生成html插件配置项
        new HtmlWebpackPlugin(VARIABLE.htmlPlugin),
    ],


    // 模版解析方式
    resolve: VARIABLE.resolve,

    // 优化
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
};
