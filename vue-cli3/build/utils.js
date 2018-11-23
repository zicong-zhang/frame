/**
 * css 热重载
 */
exports.fixExtractCssHotReload = config => {
  ["css", "postcss", "scss", "sass", "less", "stylus"].forEach(lang => {
    let chainRules = config.module.rule(lang);
    chainRules.oneOfs.values().forEach(rule => {
      addCSSHotLoader(chainRules.oneOf(rule.name));
    });
  });
}
const addCSSHotLoader = rule => {
  if (rule.use("extract-css-loader").has("loader")) {
    rule
      .use("hot")
      .before("extract-css-loader")
      .loader("css-hot-loader");
  }
}

/**
 * 提取公用 var.scss
 */
exports.useSassResourcesLoader = config => {
  // store 应该是一个数组，包含所有的 sass-loader
  const oneOfsMap = config.module.rule('scss').oneOfs.store;
  oneOfsMap.forEach(item => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: './src/sass/_var.scss', // 支持数组形式 ['vars.scss', 'mixins.scss']
      })
      .end()
  })
}
