const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  // 修改默认的入口
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 打包排除依赖项
      config.externals = {};
    }
  },
  chainWebpack: (config) => {
    // vue默认@指向src目录，这里要修改为examples，另外新增一个~指向packages
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));
    // lib目录是组件库最终打包好存放的地方，不需要eslint检查
    config.module.rule("eslint").exclude.add(path.resolve("lib")).end();
    // packages和examples目录需要加入编译
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  css: {
    // 将css样式打包进js文件
    extract: false,
  },
});
