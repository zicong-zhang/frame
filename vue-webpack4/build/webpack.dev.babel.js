import webpack from 'webpack';
import merge from 'webpack-merge';
import address from 'address';

import webpackBaseConfig from './webpack.base.babel';
import devConfig from '../config/dev.env';
import createRules from './rules';

export default env => {
  return merge(webpackBaseConfig(env), {
    mode: 'development',
    devServer: {
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
    },
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
    ]
  })
}
