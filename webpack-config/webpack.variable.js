/**
 * Webpack配置变量配置
 */
const path = require("path"),
    VARIABLE = {},
    IsProduction = process.env.NODE_ENV === 'production';

/**
 * 构建文件目录
 * @type {string}
 * @desc 开发环境下，构建目录为dev，反之为build
 */
VARIABLE.buildDir = IsProduction ? "./../dist" : "./../dev";

/**
 * 入口文件路径配置
 * @type {string | array | object}
 */
VARIABLE.entry = {
    wpui: [
        path.resolve(__dirname, `../src/index.ts`),
        path.resolve(__dirname, `../src/index.sass`),
    ],
};

/**
 * 输出文件路径配置
 * @type {{path, publicPath: string, css: string, filename: string, fonts: string, media: string, dllFilename: string}}
 * @prop path         构建的文件目录规则
 * @prop publicPath   资源引用的公共路径规则
 * @prop filename     构建后生成文件规则
 * @prop css          构建后的样式文件规则
 * @prop fonts        构建后的字体图标文件规则
 * @prop media        构建后成的媒体文件(视频/音频)规则
 */
VARIABLE.output = {
    path: path.resolve(__dirname, VARIABLE.buildDir),
    publicPath: IsProduction ? "./" : "/",
    css: `css/[name]${IsProduction ? ".min" : "[hash]"}.css`,
    filename: `js/[name]${IsProduction ? ".min" : "[hash]"}.js`,
    fonts: `../fonts/[name].[ext]`,
    media: `media/[name].[ext]`,
    img: `img/[name].[ext]`,
    limit: 8192,
};

/**
 * html插件配置
 * @type {{title: string, filename, template, dllJs: string}}
 * @prop title      html中的title标签内容
 * @prop filename   构建后生成文件规则
 * @prop template   html模版文件
 */
VARIABLE.htmlPlugin = {
    title: "WPUI",
    // favicon: path.resolve(__dirname,  "../src/assets/img/favicon.ico"),
    filename: path.resolve(__dirname, `${VARIABLE.buildDir}/index.html`),
    template: path.resolve(__dirname, `../src/index.html`),
    hash: true,
};

/**
 * 模版解析方式
 * @type {object}
 */
VARIABLE.resolve = {
    // 扩展
    extensions: ['.ts', '.js'],

    // 定义别名
    alias: {},

    // 模版解析查找文件夹
    modules: [
        "src",
        "node_modules"
    ],
};

/**
 * 定义全局挂载变量
 * @type {object}
 */
VARIABLE.ProvidePlugin = {};

/**
 * 服务器配置
 * @type {{hot: boolean, contentBase: string}}
 */
VARIABLE.devServer = {
    contentBase: VARIABLE.buildDir,
    hot: true,
};

/**
 * 开发工具配置
 */
VARIABLE.devtool = "inline-source-map";

module.exports = VARIABLE;