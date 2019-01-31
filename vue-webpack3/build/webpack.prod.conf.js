process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  resolve,
  assetsPath
} = require('./utils')
const buildConfig = require('./config');
const baseConfig = require('./webpack.base.conf');
const envConfig = require('./env/env.prod');
const loaderExtractPlugin = require('./loaders').plugins;

const isPublicProduction = process.env.npm_config_production;

module.exports = merge(baseConfig, {
  stats: {
    assetsSort: '!size',
    timings: true,
    colors: false,
    modules: false,
    children: false
  },
  output: {
    path: resolve('dist'), // 必须是绝对路径
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: !isPublicProduction && buildConfig.sourceMap.prod,
  externals: {},
  plugins: [
    ...loaderExtractPlugin,
    new webpack.DefinePlugin({
      'process.env': envConfig
    }),
    new CleanWebpackPlugin([
      'dist'
    ], {
      root: resolve(''),
      verbose: false
    }),
    // 处理 dll
    new AddAssetHtmlPlugin({
      filepath: resolve('static/js/dll/*.production.dll.js'),
      publicPath: assetsPath('js'),
      includeSourcemap: false,
      outputPath: assetsPath('js')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./.manifest/vendor-production-dll-manifest.json')
    }),
    // https://blog.csdn.net/u013884068/article/details/83511343
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: !isPublicProduction,
      uglifyOptions: {
        compress: {
          drop_debugger: isPublicProduction,
          drop_console: isPublicProduction,
          sequences: 3,
          conditionals: true,
          booleans: true,
          if_return: true,
          warnings: false,
        }
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        const r = module.resource;
        // console.log(r) // 打印出来就知道有哪些模块
        return (
          r && 
          /\.js$/.test(r) && 
          r.includes(path.join(__dirname, '../node_modules'))
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    })
  ]
})

// 性能分析
if (process.env.npm_config_report) {
  const ReportAnalyzer = require('webpack-bundle-analyzer');
  module.exports.plugins.push(new ReportAnalyzer.BundleAnalyzerPlugin());
}
