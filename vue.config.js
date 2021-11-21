/**
 * Greated By xuanhei on 2020/10/18
 **/
const path = require("path");
const { resolve } = path;

module.exports = {
    // 公共路径(必须有的)
    publicPath: "./",
    // 输出文件目录
    outputDir: process.env.outputDir || 'dist',
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "static",
    // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
    lintOnSave: false,
    // 我用的only，打包后小些
    runtimeCompiler: false,
    productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@api", resolve("src/api"))
            .set("@http", resolve("src/http"))
            .set("@config", resolve("src/config"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@validator", resolve("src/validator"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@utils", resolve("src/utils"))
            .set("@view", resolve("src/view"))
            .set("@layout", resolve("src/layout"))
            .set("@scss", resolve("src/scss"))
            .set("@static", resolve("static"))
            .set("@datas", resolve("src/datas"));
        // 添加sass公共样式
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 要公用的scss的路径
                    resources: './src/scss/common.scss'
                })
                .end();
        })
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             //依次导入的公用的scss变量，公用的scss混入，共用的默认样式
    //             prependData: `
    //               @import "./src/scss/reset.scss";
    //             `
    //         }
    //     }
    // }
}