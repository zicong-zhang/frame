const ExtractCss = require('extract-text-webpack-plugin');

const {
  resolve,
  assetsPath
} = require('./utils');
const createVueLoaderConfig = require('./vue-loader-conf');

const isProduction = process.env.NODE_ENV === 'production';
const isPublicProduction = process.env.npm_config_production;

const cssLoaders = [{
  loader: 'css-loader',
  options: {
    minimize: isProduction,
    sourceMap: !isPublicProduction,
    alias: {
      '^homeImg': resolve('src/assets/img')
    }
  }
}, {
  loader: 'postcss-loader',
  options: {
    sourceMap: !isPublicProduction
  }
}, {
  loader: 'sass-loader',
  options: {
    sourceMap: !isPublicProduction
  }
}, {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve('src/sass/_var.scss'),
      resolve('src/sass/mixins.scss')
    ]
  }
}]

// 提取 vue css
const ExtractVueCss = new ExtractCss({
  filename: isProduction ?
    assetsPath('css/[name].[contenthash:16].css') :
    assetsPath('css/[name].css'),
  allChunks: true
})

// 提取 入口文件通用 css
const ExtractBaseCss = new ExtractCss({
  filename: isProduction ?
    assetsPath('css/base.[contenthash:16].css') :
    assetsPath('css/base.css'),
  allChunks: true
})


exports.loaders = {
  vue: {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: createVueLoaderConfig({
      ExtractVueCss,
      cssLoaders
    })
  },
  babel: {
    test: /\.js$/,
    loader: 'happypack/loader?id=js',
    // loader: 'babel-loader?cacheDirectory',
    exclude: /node_modules/,
    include: [
      resolve('src')
    ]
  },
  sass: {
    test: /\.scss$/,
    use: isProduction ?
      ExtractBaseCss.extract({
        use: cssLoaders,
        fallback: 'style-loader'
      }) :
      ['style-loader'].concat(cssLoaders)
  },
  img: {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: assetsPath('img/[name].[hash:8].[ext]')
      }
    }
  }
}

exports.plugins = [
  ExtractBaseCss,
  ExtractVueCss
]
