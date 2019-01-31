const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

const {
  resolve,
  assetsPath
} = require('./utils');
const rules = require('./rules');

module.exports = {
  // 基础目录，必须绝对路径，默认使用当前文件所在目录
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    publicPath: '',
    path: resolve('dist'), // 必须是绝对路径
    filename: assetsPath('js/[name].js'),
    chunkFilename: assetsPath('js/[name].async.js')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('src'),
      '@views': resolve('src/views'),
      '@components': resolve('src/components'),
      '@tools': resolve('src/tools'),
      '@img': resolve('src/assets/img'),
      '@router': resolve('src/router'),
      '@vuex': resolve('src/vuex'),
    },
  },
  module: {
    // 忽略大型 lib ，提高构建性能
    // noParse: content => /jquery|lodash/.test(content),
    rules
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader?cacheDirectory']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'alasga.ico',
      inject: true,
      chunksSortMode: 'dependency',
      title: pkg.name,
      minify: {
        // https://github.com/kangax/html-minifier#options-quick-reference
        sortClassName: true,
        sortAttributes: true,
        // removeComments: true,
        // collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new CopyWebpackPlugin([{
      from: resolve('static'), // 绝对路径
      to: 'static',
      ignore: ['*.dll.js']
    }])
  ]
}
