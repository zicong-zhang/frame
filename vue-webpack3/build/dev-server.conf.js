const address = require('address');

module.exports = {
  // contentBase: false,
  // contentBase: '../dist',
  // contentBase: resolve('dist'),
  publicPath: '',
  overlay: true, // 在编译出错的时候，在浏览器页面上显示错误
  clientLogLevel: 'warning',
  open: false,
  // useLocalIp: true,
  hot: true, // 需要 webpack.HotModuleReplacementPlugin()
  inline: true,
  // host: '0.0.0.0',
  host: address.ip(),
  port: 8080,
  stats: 'errors-only', // cmd 打印信息 errors-only, minimal，normal，verbose, quiet 时不起效
  quiet: true, // 只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
  compress: false, // 开启 gzip
  // 用来应对返回404页面时定向到特定页面用的
  historyApiFallback: true,
}

/* if (module.hot) {
  module.hot.accept();
} */
