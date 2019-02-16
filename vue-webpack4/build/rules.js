import {
  resolve,
  isDev
} from './utils';

const isProduction = process.env.NODE_ENV === 'production';

export default function createRules(plugins = {}) {
  const {
    MiniCssExtractPlugin = {}
  } = plugins;

  const cssLoaders = [
    !isProduction
    ? 'vue-style-loader'
    : {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // css 中的背景图打包后默认在 css/img, 因此返回上一层路径
        publicPath: '../'
      }
    }, {
      loader: 'css-loader',
      options: {
        sourceMap: !isProduction
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: !isProduction
      }
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: !isProduction,
        data: '@import "~@styles/globals/index.scss";'
      }
    }
  ]

  const rules = [{
    test: /\.vue$/,
    use: [{
      loader: 'cache-loader',
      options: {
        cacheDirectory: resolve('node_modules/.cache/vue-loader')
      }
    }, {
      loader: 'vue-loader'
    }]
  }, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'thread-loader'
    }, {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      }
    }]
  }, {
    test: /\.scss$/,
    use: cssLoaders
  }, {
    test: /\.(jpe?g|png|gif)$/,
    loader: 'url-loader',
    options: {
      limit: 4096,
      name: 'img/[name].[hash:8].[ext]'
    }
  }, {
    test: /\.svg$/,
    loader: 'file-loader',
    options: {
      name: 'img/[name].[hash:8].[ext]'
    }
  }]

  return rules;
}
