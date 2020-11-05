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