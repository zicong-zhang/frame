import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ReportAnalyzer from 'webpack-bundle-analyzer';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import webpackBaseConfig from './webpack.base.babel';
import prodConfig from '../config/prod.env';
import createRules from './rules';
import {
  resolve
} from './utils';

export default env => {
  const config = merge(webpackBaseConfig(env), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: 'js/[name].[chunkhash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    module: {
      rules: createRules({
        MiniCssExtractPlugin
      })
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              // turn off flags with small gains to speed up minification
              arrows: false,
              collapse_vars: false, // 0.3kb
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,

              // a few flags with noticable gains/speed ratio
              // numbers based on out of the box vendor bundle
              booleans: true, // 0.7kb
              if_return: true, // 0.4kb
              sequences: true, // 0.7kb
              unused: true, // 2.3kb

              // required features to drop conditional branches
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          sourceMap: true,
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({
          // https://cssnano.co/guides/optimisations 科学上网
          cssnanoOptions: {
            preset: ['default', {
              mergeLonghand: false,
              cssDeclarationSorter: false,
              reduceTransforms: false,
              zIndex: false
            }]
          }
        })
      ],
      // https://blog.csdn.net/qq_26733915/article/details/79458533
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\\/]node_modules[\\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      },
      // https://juejin.im/post/5b56909a518825195f499806
      moduleIds: 'hashed',
      // https://www.jianshu.com/p/23dcabf35744
      runtimeChunk: {
        name: entrypoint => `runtime.${entrypoint.name}`
      }
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.DefinePlugin({
        'process.env': prodConfig
      }),
      new CleanWebpackPlugin('dist', {
        root: resolve(''),
        verbose: false
      }),
      new webpack.NamedChunksPlugin(chunk => {
        if (chunk.name) return chunk.name;

        const hash = require('hash-sum')
        return hash(
          Array.from(chunk.modulesIterable, m => m.id).join("_")
        )
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    ]
  })

  if (process.env.npm_config_report) {
    config.plugins.push(new ReportAnalyzer.BundleAnalyzerPlugin());
  }
  
  return config;
}
