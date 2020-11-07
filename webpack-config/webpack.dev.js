/**
 * Webpack开发配置文件
 */
const webpack = require('webpack'),
    {merge} = require('webpack-merge'),
    common = require('./webpack.common.js'),
    VARIABLE = require('./webpack.variable.js');

module.exports = merge(common, {
    // 环境
    mode: "production",

    // 加载器
    module: {
        rules: [
            {
                // Css依赖配置项
                test: /\.(scss|sass|css)$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            }
        ],
    },

    // 开发工具
    devtool: VARIABLE.devtool,

    // 服务器
    devServer: VARIABLE.devServer,

    // 插件
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ]
});