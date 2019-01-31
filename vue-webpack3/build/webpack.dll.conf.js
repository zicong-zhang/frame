const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  resolve,
  assetsPath,
  log
} = require('./utils');

const ENV = ['development', 'production'];

const webpackConfigs = ENV.map(env => {
  const config = {
    filename: `[name].[hash].${env}.dll.js`,
    library: `[name]_${env}_dll_[hash:6]`,
    manifestPath: `build/.manifest/[name]-${env}-dll-manifest.json`
  }

  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new CleanWebpackPlugin([
      assetsPath(`js/dll/*.${env}.dll.js`)
    ], {
      root: resolve(''),
      verbose: false
    }),
    new webpack.DllPlugin({
      // 本 Dll 文件中各模块的索引，供 DllReferencePlugin 读取使用
      path: resolve(config.manifestPath),
      name: config.library,
    })
  ]

  if (env === 'production') {
    plugins.push(new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: {
          warnings: false,
        }
      }
    }))
  }

  return {
    entry: {
      // const pkg = require('./package.json');
      // vendor: Object.keys(pkg.dependencies)
      vendor: [
        'vue/dist/vue.runtime.esm.js',
        'vue-router',
        'vuex',
        'axios'
      ]
    },
    output: {
      path: resolve('static/js/dll'),
      filename: config.filename,
      library: config.library, // 给 DllPlugin.name 使用
    },
    plugins
  }
});

const handler = (err, stats) => {

  if (err) throw err

  process.stdout.write(stats.toString({
    colors: false,
    modules: false,
    children: true,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    log('red', `  Fail DLL.\n`)
    process.exit(1)
  }
    log('green', '  Build Finish.\n')
}

webpack(webpackConfigs, handler)

// output.library
// 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与 DllPlugin 的 name 参数保持一致
// vendor.dll.js 中暴露出的全局变量名。
// 主要是给 DllPlugin 中 的name 使用，
// 故这里需要和 webpack.DllPlugin 中的 `name: '[name]_dll',` 保持一致。
