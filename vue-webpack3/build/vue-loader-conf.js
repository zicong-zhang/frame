const isProduction = process.env.NODE_ENV === 'production';

module.exports = ({
  ExtractVueCss,
  cssLoaders
}) => {
  const styleLoader = isProduction
    ? ExtractVueCss.extract({
        use: cssLoaders,
        fallback: 'vue-style-loader',
        publicPath: '../../',
      })
    : ['vue-style-loader'].concat(cssLoaders)

  return {
    loaders: {
      scss: styleLoader
      // scss: styleLoader
    }
  }
}
