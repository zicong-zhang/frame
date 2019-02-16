import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { resolve } from './utils';

const ENV = ['development', 'production'];

export default ENV.map(env => {
  const config = {
    filename: `[name].[hash:8].${env}.js`,
    outputPath: resolve('static/js/dll'),
    library: `[name]_${env}_[hash:6]`,
    manifestPath: resolve(`build/.manifest/[name]-${env}-manifest.json`)
  }

  const rules = {
    mode: env,
    devtool: false,
    entry: {
      dll: [
        'vue/dist/vue.runtime.esm.js',
        'vue-router',
        'vuex',
        'axios'
      ]
    },
    output: {
      path: config.outputPath,
      filename: config.filename,
      library: config.library
    },
    optimization: env === 'production'
      ? {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                arrows: false,
                collapse_vars: false,
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
                booleans: true,
                if_return: true,
                sequences: true,
                unused: true,
                conditionals: true,
                dead_code: true,
                evaluate: true
              },
              mangle: {
                safari10: true
              }
            },
            sourceMap: false,
            cache: true,
            parallel: true
          })
        ]
      }
      : {},
    plugins: [
      new ProgressBarPlugin(),
      new CleanWebpackPlugin(
        'dll',
        {
          root: resolve('static/js'),
          verbose: false
        }
      ),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new webpack.DllPlugin({
        path: config.manifestPath,
        name: config.library
      })
    ],
    stats: {
      modules: false
    }
  }

  return rules;
})
