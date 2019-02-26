import webpack from 'webpack';
import merge from 'webpack-merge';
import address from 'address';
import chalk from 'chalk';
import FriendlyErrorPlugin from 'friendly-errors-webpack-plugin';

import webpackBaseConfig from './webpack.base.babel';
import devConfig from '../config/dev.env';
import createRules from './rules';

export default env => {
  const devServer = {
    publicPath: '',
    overlay: true,
    clientLogLevel: 'warning',
    open: false,
    useLocalIp: true,
    hot: true,
    inline: true,
    host: address.ip(),
    port: 8080,
    stats: 'errors-only',
    quiet: true,
    compress: false,
    historyApiFallback: true
  }

  return merge(webpackBaseConfig(env), {
    mode: 'development',
    devServer,
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    module: {
      rules: createRules()
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': devConfig
      }),
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorPlugin({
        compilationSuccessInfo: {
          messages: [chalk.cyan(`http://${devServer.host}:${devServer.port}`)]
        }
      })
    ]
  })
}
