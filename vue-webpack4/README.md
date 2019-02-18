## 已具备的功能
- [x] Vue Runtime
- [x] Vue Filters
- [x] Vue Mixins
- [x] Vue Directives
- [x] Vue Components (全局组件 / 通用组件 / 挂到原型调用的组件)
- [x] Vue Router
- [x] Vuex
- [x] Sass
- [x] .vue 文件 scss 全局自动引入 var / mixin 文件
- [x] autoprefixer 补全 css 前缀
- [x] 区分环境: 正式环境生产包 / 测试环境生产包 / 测试环境开发服务
- [x] nodemon 重载调试 webpack
- [x] 打包大小报告

#

## 已具备的优化
- [x] MiniCssExtractPlugin 根据 chunk 拆分 css，更好地划分 css 文件，减小首屏时间
- [x] 使用 babel-env 编译 ES6+ (async、promise、...语法)
- [x] runtime 代码内联至 index.html
- [x] Dll 预打包无变动的第三方依赖 (vue / vue-router / vuex / axios)
- [x] 压缩所有 js / css
- [x] 异步 chunk
- [x] 持久化缓存
- [ ] `preload-webpack-plugin` 对 webpack4 的支持还在 beta 阶段 2019.02.16


- ES6 Module 编写 webpack 配置文件
