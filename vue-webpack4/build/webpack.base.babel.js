import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import PreloadPlugin from 'preload-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const pgk = require('../package.json');
import {
  resolve,
  assetPath,
  isDev
} from './utils';

// 用于 测试环境的生产包
const isTestProduction = process.env.npm_config_test;

/**
 * TODO
 * 拆分 webpack 配置文件
 * friendError
 */


export default env => {
  return {
    node: {
      setImmediate: false,
      process: 'mock',
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    stats: {
      modules: false,
      children: false,
      excludeAssets: /img\//
    },
    context: resolve(''),
    entry: {
      app: './src/main.js'
    },
    output: {
      publicPath: '',
      path: resolve('dist'),
      /* filename: 'js/[name].[chunkhash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js' */
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': resolve('src'),
        '@styles': resolve('src/styles'),
        '@views': resolve('src/views'),
        '@components': resolve('src/components'),
        '@tools': resolve('src/tools'),
        '@img': resolve('src/assets/img'),
        '@router': resolve('src/router'),
        '@vuex': resolve('src/vuex'),
        '@static': resolve('static')
      }
    },
    module: {
      noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DllReferencePlugin({
        manifest: require(`./.manifest/dll-${env}-dll-manifest.json`)
      }),
      new HtmlWebpackPlugin({
        template: assetPath('index.html'),
        title: pgk.name,
        inject: true,
        minify: isDev(false, {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            removeScriptTypeAttributes: true
          }
        )
      }),
      // https://github.com/numical/script-ext-html-webpack-plugin
      new ScriptExtHtmlWebpackPlugin({
        inline: [
          // 提取 runtime 内联至 index.html
          /runtime\..*\.js$/
        ]
      }),
      new AddAssetHtmlPlugin({
        filepath: resolve(`static/js/dll/dll.*.${env}.js`),
        publicPath: 'js',
        includeSourcemap: false,
        outputPath: 'js'
      }),
      new CopyWebpackPlugin([{
        from: resolve('static'),
        to: '',
        ignore: [
          'index.html',
          'dll.*.js'
        ]
      }]),
      // 对 webpack4 的支持还在 beta 阶段 2019.02.16
      /* new PreloadPlugin({
        rel: 'prefetch',
        include: 'asyncChunks'
      }), */
    ]
  }
}
