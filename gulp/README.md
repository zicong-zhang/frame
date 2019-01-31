## gulp + vue 无模块化式的开发架构

> 适用于老旧项目

## 集成功能
- Gulp3 构建流
- 抽离公用的 HTML 部分，由 gulp 插件注入
- ES6 语法编译 (不支持 API 编译，如：Promise)
- Sass 语法编译
- Vue 组件开发 (js 文件形式)
- BrowserSync 插件
  + 开发服务器 
  + 跨域代理 
  + 自动刷新

### 开发
```javascript
// 不编译 ES6，可加快页面刷新速度
npm start
// 编译 ES6，调试低版本浏览器时需要使用非 ES6 语法
npm run dev
```

### 打包上线
```javascript
npm run build
```
