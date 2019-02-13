import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const pgk = require('../package.json');
import createRules from './rules';
import {
  resolve,
  assetPath
} from './utils';

const isTestProduction = process.env.IS_TEST;



/**
 * TODO
 * * 配置 .env 文件
 * mode = test
 * 优化选项的作用
 * 配置 dll
 */

export default {
  // mode: 'development',
  mode: 'production',
  devtool: 'source-map',
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
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].async.js'
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
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
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
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        API_ROOT: '"http://www.alasga.cn/"'
      }
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('dist', {
      root: resolve(''),
      verbose: false
    }),
    new HtmlWebpackPlugin({
      template: assetPath('index.html'),
      title: pgk.name,
      inject: true,
      chunksSortMode: 'dependency',
    }),
    new CopyWebpackPlugin([{
      from: resolve('static'),
      to: '',
      ignore: ['index.html']
    }]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].async.[contenthash:8].css'
    })
  ]
}
