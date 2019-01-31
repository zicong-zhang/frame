const proxyMiddleware = require('http-proxy-middleware');

const { API } = require('./api.js');

module.exports = {
  from: {
    indexPage: "src/pages/home/home.html",
    html: ["src/pages/**/*.html", "!src/pages/home/*.html"],
    sass: "src/sass/**/*.scss",
    js: "src/js/**/*.js",
    component: "src/components/**/*.js",
    commonHtml: "src/common_page/**/*.html",
    tools: "src/tools/**/*",
    interface: "src/interface/**/*",
    img: "src/img/**/*",
    lib: "src/lib/**/*"
  },
  output: {
    indexPage: "./",
    html: "pages",
    sass: "css",
    js: "js",
    commonHtml: "commonHtml",
    tools: "tools",
    component: "components",
    interface: "interface",
    img: "img",
    lib: "lib"
  },
  autoprefixerConfig: {
    browsers: [
      "last 2 versions",
      "ie > 9",
      "Android >= 4.2",
      "safari > 8"
    ]
  },
  sassMode: {
    nested: 'nested', // 嵌套输出方式 
    expanded: 'expanded', // 展开输出方式 
    compact: 'compact', // 紧凑输出方式 
    compressed: 'compressed' // 压缩输出方式 
  },
  proxyTest: proxyMiddleware('/api', {
    target: API,
      changeOrigin: true
  }),
  proxyCoupon: proxyMiddleware('/coupon', {
    target: 'https://test.alasga.cn/pro/coupon',
    changeOrigin: true
  })
}
