const webpack = require("webpack");
let path = require("path");
const resolve = dir => require("path").join(__dirname, dir);
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
//const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  publicPath: "/", // 基本路径
  outputDir: "dist", // 输出文件目录
  assetsDir: "", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 , Default: ''
  indexPath: "index.html", //Default: 'index.html' // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  filenameHashing: true, //Default: true
  lintOnSave: true, //Default: true resolve// eslint-loader 是否在保存的时候检查,有效的值：true | false | "error"设置为 "error" 时，检查出的错误会触发编译失败。
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  transpileDependencies: [], //Default: [] //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  productionSourceMap: false, //Default: true // 生产环境是否生成 sourceMap 文件 , 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  crossorigin: "", //Default: undefined   // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  // css相关配置
  // webpack配置
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    /*// 用cdn方式引入
    config.externals({
      vue: "Vue",
      vuex: "Vuex",
      axios: "axios"
    });*/
    config.resolve.symlinks(true); // 修复HMR
    config.resolve.alias.set("@", resolve("src")); //配置快捷路径，styles为路径名字，resolve是原路径地址
    // 配置svg
    /*config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();*/
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
      /*new BundleAnalyzerPlugin({ analyzerPort: 9000 })*/
    ]
    /*optimization: {
      noEmitOnErrors: true,
      splitChunks: { chunks: "all" },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              // warnings: false,
              drop_console: true,
              pure_funcs: ["console.log"]
            }
          }
        })}
      ]*/
  },

  //vueLoader: {}, // vue-loader 配置项
  //dll: false, // 是否启用dll
  css: {
    //extract: false, //Default: 生产环境下是 true，开发环境下是 false // 是否使用css分离插件 ExtractTextPlugin // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    sourceMap: false, // 开启 CSS source maps? 设置为 true 之后可能会影响构建的性能。
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData:
          '@import "@/styles/common.scss";' +
          '@import "@/styles/mixin.scss";' +
          '@import "@/styles/reset.scss";' +
          '@import "@/styles/variable.scss";'
      }
    }
    // modules: false // 启用 CSS modules for all css / pre-processor files.
    // requireModuleExtension: false, // 如果你想去掉文件名中的 .module，可以设置为 false
  },
  parallel: require("os").cpus().length > 1, //Default: require('os').cpus().length > 1  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // PWA 插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
    port: 8080,
    https: false,
    hotOnly: false,
    compress: true, // 开启gzip
    //proxy: null, // 设置代理
    proxy: {
      "/devApi/": {
        // 目标:指向网络地址
        target: "http://129.204.189.149:8084",
        // webpack属性，映射一个host
        changeOrigin: true,
        pathRewrite: {
          "/devApi/": ""
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
