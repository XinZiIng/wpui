/**
 * Webpack生产配置文件
 */
const {merge} = require('webpack-merge'),
    common = require('./webpack.common.js'),
    VARIABLE = require('./webpack.variable.js'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    // 环境
    mode: "development",

    // 加载器
    module: {
        rules: [
            {
                // Css依赖配置项
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ],
    },

    // 插件
    plugins: [
        // 提取css
        new MiniCssExtractPlugin({
            filename: VARIABLE.output.css,
        }),

        // gzip压缩
        new CompressionPlugin({
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ]
});