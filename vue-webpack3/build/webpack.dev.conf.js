const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const chalk = require('chalk');

const {
  resolve,
  assetsPath
} = require('./utils')
const buildConfig = require('./config');
const baseConfig = require('./webpack.base.conf');
const devServer = require('./dev-server.conf');
const envConfig = require('./env/env.dev');

module.exports = merge(baseConfig, {
  devServer,
  devtool: buildConfig.sourceMap.prod,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envConfig
    }),
    // 处理 dll
    new AddAssetHtmlPlugin({
      filepath: resolve('static/js/dll/*.development.dll.js'),
      publicPath: assetsPath('js'),
      includeSourcemap: false,
      outputPath: assetsPath('js')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./.manifest/vendor-development-dll-manifest.json')
    }),
    
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [chalk.cyan(`http://${devServer.host}:${devServer.port}`)]
      }
    })
  ]
})


// 仅在多页应用下效果明显，单页应用反而增加构建时间
// const HardSourceWebpackPlugin =  require('hard-source-webpack-plugin');
// https://yq.aliyun.com/articles/635630
// new HardSourceWebpackPlugin(),
