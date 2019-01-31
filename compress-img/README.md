[TOC]

# 一个用于压缩图片的插件

# 注意事项
input 标签 type=file, accept 不能写 `image/*` 或 `image/jpeg...`
有些手机的图片的 file.type 为空 或者各种奇怪的值 如 华为手机 有些图片是 `.dowload`
如果限制了，会导致用户的手机无法选择这些有问题的图片

本插件依赖 exif.js

# 使用示例
```html
<input
  type="file"
  name="fileInput"
  id="file"
  accept="*"
  @change="select"
>

<script src="lib/vue.js"></script>
<script src="lib/exif.js"></script>
<script src="./compress.js"></script>
```
```javascript
CompressImg(file, {
  before: function (base64) {
     
  },
  finish: function (res) {
    var { file, base64 } = res;
  },
  error: function (errType) {

  }
})
```

# 参数说明

## file
> 传入需要压缩的图片

## options

### size `Number`
> 限制压缩后的图片的大小(浮动值，不能完全精确到这个数值)
- default `500` (kb)

### fileName `String`
> 指定压缩后的文件名
- default `'compress_file_' + Math.random()`

### before `Function`
> 压缩前的回调
>> 使用场景：上传压缩的图片之前，先用压缩前的图片展示在页面上，如果文件太大会导致 base64 很长，渲染时会导致页面有短暂的卡死
- default 无
- params
  + `String` base64

### finish `Function`
> 完成压缩后的回调
- default 无
- params
  + `Object`
    - base64 `String`
    - file `File`

### error `Function`
> 压缩失败的回调
- default 无
- params
  + `String` 'IMG_ERROR' | 'COMPRESS_ERROR'
