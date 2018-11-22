let gulp = require("gulp");

// 代理
let proxyMiddleware = require('http-proxy-middleware');
//编译sass
let sass = require("gulp-sass");
//判断文件是否有变化
let changed = require("gulp-changed");
//压缩js
let uglify = require("gulp-uglify");
//压缩css
let cleanCSS = require("gulp-clean-css");
//编译es6
let babel = require("gulp-babel");
require("babel-polyfill");
//移除严格模式
let removeUseStrict = require("gulp-remove-use-strict");
// 去除console.log
let stripDebug = require("gulp-strip-debug");
//重命名文件
let rename = require("gulp-rename");
//同步浏览器
let browserSync = require("browser-sync").create();
// 引入公共html
let htmlReplace = require("gulp-html-replace");
// 自动补全浏览器前缀
let autoprefixer = require("gulp-autoprefixer");
// 打码
let rev = require("gulp-rev");
// 替换打码路径
let revCollector = require("gulp-rev-collector");

let del = require("del");
// 替换图片路径为服务器路径
let replace = require("gulp-url-replace");

//"gulp-replace-pro" gulp-replace

/* sass 模式
嵌套输出方式 nested
展开输出方式 expanded
紧凑输出方式 compact
压缩输出方式 compressed
 */




let ENV = 'development';

let from = {
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
}
let output = {
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
}
let htmlModulePath = () => {
  return {
    meta: `src/common_page/base/meta.html`,
    css: [`src/common_page/base/css.html`, `src/common_page/${ENV}/you-meng.html`],
    script: `src/common_page/${ENV}/script.html`,
  }
}

let autoprefixerConfig = {
  browsers: [
    "last 1000 versions",
    "Android >= 4.2"
  ]
}

// 开发环境
let test = false;
const devJs = (_from, _to) => {
  if (test) {
    console.log('...test');
    return gulp.src(_from)
      //转ES5
      .pipe(babel({
        presets: ["es2015", "es2016", "es2017"]
      }))
      //去除严格模式
      .pipe(removeUseStrict())
      //重命名
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(changed(`dev/${_to}`))
      //编译输出
      .pipe(gulp.dest(`dev/${ _to }`))
  } else {
    return gulp.src(_from)
      //重命名
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(changed(`dev/${_to}`))
      //编译输出
      .pipe(gulp.dest(`dev/${ _to }`))
  }
}

// 清理文件夹
gulp.task("devClean", () => {
  test = process.argv.slice(2)[1];
  return del(["dev/**/*", "./index.html"]);
})

// 首页
gulp.task("devIndex", () => {
  return gulp.src(from.indexPage)
    .pipe(htmlReplace({
      metaComponent: gulp.src(htmlModulePath().meta),
      cssComponent: gulp.src(htmlModulePath().css),
      scriptComponent: gulp.src(htmlModulePath().script)
    }))
    .pipe(rename("index.html"))
    .pipe(gulp.dest(output.indexPage));
})

// html
gulp.task("devHtml", () => {
  return gulp.src(from.html)
    .pipe(htmlReplace({
      metaComponent: gulp.src(htmlModulePath().meta),
      cssComponent: gulp.src(htmlModulePath().css),
      scriptComponent: gulp.src(htmlModulePath().script)
    }))
    .pipe(changed(`dev/${output.html}`))
    .pipe(gulp.dest(`dev/${output.html}`));
})

// 编译sass
gulp.task("devSass", () => {
  return gulp.src(from.sass)
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))

    .pipe(changed(`dev/${output.sass}`))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(`dev/${output.sass}`))
})

// js
gulp.task("devJs", () => {
  return devJs(from.js, output.js)
});

// tools
gulp.task("devTools", () => {
  return devJs(from.tools, output.tools)
});

// components
gulp.task("devComponent", () => {
  return devJs(from.component, output.component)
});

// lib
gulp.task("devLib", () => {
  return gulp.src(from.lib)
    .pipe(gulp.dest(`dev/${output.lib}`))
})

// img
gulp.task("devImg", () => {
  return gulp.src(from.img)
    .pipe(changed(`dev/${output.img}`))
    .pipe(gulp.dest(`dev/${output.img}`))
})

gulp.task("jt", () => {
  const proxyTest = proxyMiddleware('/api', {
    target: 'http://test.alasga.cn/proxy/web/gateway',
    changeOrigin: true
  });
  // 优惠券部分
  const proxyCoupon = proxyMiddleware('/coupon', {
    target: 'http://test.alasga.cn/pro/coupon',
    changeOrigin: true
  });

  //自动刷新浏览器
  browserSync.init({
    server: {
      baseDir: "./",
      middleware: [proxyCoupon, proxyTest]
    },
    ui: false,
    notify: false,
    open: false,
    //  browser: "google chrome",
    files: ["src/**/*"],
    // files: [
    //   "dev/css/**/*.css", 
    //   "dev/img/*",
    //   {
    //     match: ["dev/pages/**/*.html"],
    //     fn: function(event, file) {
    //       console.log('e, file:_____', event, file);
    //       browserSync.reload();
    //     }
    //   }, {
    //     match: ["dev/pages/**/*.html"],
    //     fn: function(event, file) {
    //       console.log('e, file:_____', event, file);
    //       browserSync.reload();
    //     }
    //   }
    // ],
    // host: "192.168.1.108"
    port: 2020,
    // reloadDelay: 2000, // 等待2秒钟之前的任何浏览器应该尝试注入/加载的文件。
    // reloadDebounce: 2000, // 限制在浏览器中的频率：刷新事件可以被发射到连接的客户机
    //点击，滚动和表单在任何设备上输入将被镜像到所有设备里
    ghostMode: {
      clicks: false,
      forms: true,
      scroll: false
    }
  });

  gulp.watch(from.html, ["devHtml"]);
  gulp.watch(from.indexPage, ["devIndex"]);
  gulp.watch(from.commonHtml, ["devHtml", "devIndex"]);
  gulp.watch(from.img, ["devImg"])
  gulp.watch(from.js, ["devJs"]);
  gulp.watch(from.sass, ["devSass"])
  gulp.watch(from.tools, ["devTools"]);
  gulp.watch(from.component, ["devComponent"]);

  // browserSync.watch("src/**/*.html").on("change", browserSync.reload);
  // browserSync.watch("dev/js/**/*.min.js").on("change", browserSync.reload);
  // browserSync.watch("dev/tools/*.js").on("change", browserSync.reload);

})

// 初始化
gulp.task("dev", ["devClean"], () => {
  return gulp.start(["devImg", "devLib", "devTools", "devComponent", "devJs", "devSass", "devHtml", "devIndex"], ["jt"]);
})



// 生产配置

// 清空输出目录
gulp.task("buildClean", () => {
  return del(["dist/**/*", "rev/**/*"]);
})

// 复制第三方库文件
gulp.task("buildLib", ["buildClean"], () => {
  return gulp.src(from.lib)
    .pipe(gulp.dest(`dist/web/${ output.lib }`))
})

// 复制图片
gulp.task("buildImg", ["buildLib"], () => {
  return gulp.src(from.img)
    .pipe(gulp.dest(`dist/web/${ output.img }`))
})

function buildJs(_from, _to) {
  const  opts = {
    presets: ['es2015', 'es2016', 'es2017']
  };
  
  return gulp.src(_from)
    .pipe(babel(opts))
    .pipe(removeUseStrict())
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(rev()) // 文件md5打码
    .pipe(gulp.dest(`dist/web/${ _to }`)) // 输出打码文件
    .pipe(rev.manifest()) // 生成打码目录
    .pipe(gulp.dest(`rev/${ _to }`)); // 输出打码目录
}

// 打码js
gulp.task("revJs", ["buildImg"], () => buildJs(from.js, output.js));

// components
gulp.task("revComponent", ["revJs"], () => buildJs(from.component, output.component));

// 打码工具类
gulp.task("revTools", ["revComponent"], () => buildJs(from.tools, output.tools));

// 打码interface
gulp.task("revApi", ["revTools"], () => buildJs(from.interface, output.interface));

// 打码sass
gulp.task("revSass", ["revApi"], () => {
  return gulp.src(from.sass)
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerConfig))
    /* .pipe(replace({
      "(\.\.\/)*img/": "//ow.pic.alasga.cn/",
    })) */
    .pipe(rev())
    .pipe(gulp.dest(`dist/web/${ output.sass }`))
    .pipe(rev.manifest())
    .pipe(gulp.dest(`rev/${ output.sass }`));
})



// 合并html组件
gulp.task("revHtml", ["revSass"], () => {
  return gulp.src("src/pages/**/*.html")
    .pipe(htmlReplace({
      metaComponent: gulp.src(htmlModulePath().meta),
      cssComponent: gulp.src(htmlModulePath().css),
      scriptComponent: gulp.src(htmlModulePath().script)
    }))
    /* .pipe(replace({
      "(\.\.\/)*img/": "//ow.pic.alasga.cn/",
    })) */
    .pipe(gulp.dest(`rev/${ output.html }`));
})

// 替换路径
gulp.task("replacePath", ["revHtml"], () => {
  return gulp.src([
      "./rev/**/*.json",
      "./rev/**/*.html"
    ])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest("dist/web"));
})

// 输出首页
gulp.task("outputIndex", ["replacePath"], () => {
  return gulp.src("dist/web/pages/home/home.html")
    .pipe(replace({
      "dev\/pages": "web/pages"
    }))
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./dist"))
})



gulp.task("build", () => {
  ENV = 'product';
  gulp.start(["outputIndex"]);
})