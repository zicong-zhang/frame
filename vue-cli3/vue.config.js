const rem = require('postcss-px2rem');
const autoprefixer = require('autoprefixer');
const dayjs = require("dayjs");
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === "development";

/**
 * TODO
 * 消除冗余的css代码 PurifyCssWebpack  https://blog.csdn.net/lhjuejiang/article/details/80396998
 * 提取多个 css 文件，按路由提取
 */


function addCSSHotLoader(rule) {
  if (rule.use("extract-css-loader").has("loader")) {
    rule
      .use("hot")
      .before("extract-css-loader")
      .loader("css-hot-loader");
  }
}

function fixExtractCssHotReload(config) {
  ["css", "postcss", "scss", "sass", "less", "stylus"].forEach(lang => {
    let chainRules = config.module.rule(lang);
    chainRules.oneOfs.values().forEach(rule => {
      addCSSHotLoader(chainRules.oneOf(rule.name));
    });
  });
}


module.exports = {
  productionSourceMap: false,
  // Babel 显式转译列表
  transpileDependencies: [],
  filenameHashing: true,
  devServer: {
    // process.platform：列举node运行的操作系统的环境，只会显示内核相关的信息，如：linux2， darwin，而不是“Redhat ES3” ，“Windows 7”，“OSX 10.7”等；
    hot: true,
    // host: '0.0.0.0',
    port: 8080,
    https: false,
    // hotOnly: false,
    // contentBase 指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录
    // contentBase: false,
    proxy: { // https://cli.vuejs.org/zh/config/#devserver-proxy
      '/api': {
        target: 'http://119.23.247.173:8080/gateway/',
        // ws: true,
        // changeOrigin: true
      }
    },
    before: app => {}
  },
  // css的处理
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: {
      filename: isDev ? "css/[name].css" : `css/[name].${dayjs().format("YYYYMMDDHHmm")}.css`,
      chunkFilename: isDev ? "css/[name].css" : `css/[name].${dayjs().format("YYYYMMDDHHmm")}.css`
    },
    // 当为true时，css文件名可省略 module 默认为 false
    // modules: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    // extract: false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false,
    //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      css: {},
      less: {},
      sass: {},
      postcss: {
        plugins: [
          rem({ remUnit: 75 }),
          autoprefixer({
            browsers: ["> 0.001%"]
          })
        ]
      }
    }
  },
  pluginOptions: {},
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  //如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  /* 
    // A shorthand method for setting a value on a ChainedMap
    devServer.hot(true);

    // This would be equivalent to:
    devServer.set('hot', true);
   */
  configureWebpack: config => {
    // externals 测试一下
    config.externals = {
      echarts: 'echarts'
    }

    // alias 测试 .语法 是否报错，测试内部对象是否为 map类型
    /* config.resolve.alias
      .set('SRC', resolve('src'))
      .set('ASSET', resolve('src/assets'))
      .set('VIEW', resolve('src/components/page'))
      .set('COMPONENT', resolve('src/components/common'))
      .set('UTIL', resolve('src/utils'))
      .set('SERVICE', resolve('src/services'));
 */
    // config.plugins = [
      /* new CopyWebpackPlugin([
        { from: 'node_modules/jquery/dist', to: 'scripts/jquery' },
      ]),
      new HtmlWebpackIncludeAssetsPlugin({
        assets: [
          'scripts/jquery/jquery.js',
          'scripts/sdk/anychat/sdk/anychat4html5.min.js',
          'scripts/sdk/anychat/sdk/anychatobject.js',
          'scripts/sdk/anychat/sdk/anychatsdk.js',
          'scripts/sdk/weixin/sdk.js',
        ],
        append: false,
      }), */
    // ]

    //打包文件带hash
    // config.output.filename('[name].[hash].js').end();

    if (isProduction) {

    } else {

    }
  },

  chainWebpack: config => {

    // css 热重载
    fixExtractCssHotReload(config);

    // store 应该是一个数组，包含所有的 sass-loader
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/sass/_var.scss',
          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
  },

  /* configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      if (process.env.npm_lifecycle_event === 'analyze') {
        config.plugins.push(
          new BundleAnalyzerPlugin()
        );
      }

    } else {
      // 为开发环境修改配置...
    }
  }, */
}
