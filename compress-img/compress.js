(function() {
  /**
   * 压缩图片
   * 
   * @param {File} file file 对象
   * @param {Object} opts 配置项
   * 
   * opts
   * 
   * @param {Number} size 图片大小限制 kb @default 500
   * @param {String} fileName 压缩后的图片名 @default `compress_file_${Math.random()}`
   * @param {Function} before 开始压缩前的回调 
   *    @return {Object} { base64: 图片 base64 }
   * @param {Function} finish 完成压缩后的回调 
   *    @return {Object} { file: 压缩后的 file 对象, base64: 压缩后图片的 base64 }
   * @param {Function} error 压缩失败的回调 
   *    @return {Object} { errorType: 错误类型 'IMG_ERROR' | 'COMPRESS_ERROR' }
   * 
   * 调用
   * CompressImg(file, {
   *    before: function (file, canvas) {
     
        },
        finish: function (res) {
          var { file, base64 } = res;
        },
        error: function (errType) {

        }
      })
   * 
   */

  function CompressImg(file, opt) {
    opt = opt || {};

    // 长边的最大值
    this.MAX_WIDTH = 1920; // px
    // 压缩后文件的大小
    this.MAX_FILE_SIZE = opt.size || 500; // kb
    // 完成压缩后的回调
    this.finish = opt.finish;
    // 压缩前 回调
    this.before = opt.before;
    // 失败回调
    this.error = opt.error;
    // 压缩后的文件名
    this.fileName = opt.fileName || 'compress_file_' + Math.random();

    this.init(file, opt);
  }


  Object.defineProperty(CompressImg, 'prototype', {
    value: {
      constructor: CompressImg,

      // 初始化
      init: function(file) {
        if (!file) return;

        this.readFile(file);
      },

      // 异常处理
      errorHandler: function(type) {
        if (typeof this.error === 'function') this.error(type);
      },

      // 读取文件
      readFile: function(file) {
        var _this = this;
        var reader = new FileReader();

        reader.onload = function(e) {
          var image = new Image();

          image.onload = function() {
            _this.canvasHandler(image, file);
          }

          // 传入的 file 有可能不是图片，如 无后缀的文件
          image.onerror = function(err) {
            _this.errorHandler('IMG_ERROR');
          }
          
          var url = e.target.result;
          image.src = url;
        }
        reader.readAsDataURL(file);
      },

      // 绘制 canvas
      canvasHandler: function(img, file) {
        if (typeof this.before === 'function') this.before(img.src);
        
        var _this = this;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, img.width, img.height);
        this.rotateImg(ctx, img, canvas, function (resizeCanvas) {
          _this.beforeCompress(resizeCanvas, file);
        });
      },

      // 旋转图片方向
      rotateImg: function(ctx, img, canvas, cb) {

        var resizeImg = this.getResizeImg(img);
        var w = resizeImg.width;
        var h = resizeImg.height;

        canvas.width = w;
        canvas.height = h;

        EXIF.getData(img, function() {
          var orientation = EXIF.getTag(img, 'Orientation');

          switch (orientation) {
            case 3:
              ctx.rotate(180 * Math.PI / 180);
              ctx.drawImage(resizeImg, -w, -h, w, h);
              break;

            case 6:
              canvas.width = h;
              canvas.height = w;
              ctx.rotate(90 * Math.PI / 180);
              // ctx.drawImage(resizeImg, -h, w, h, w);
              ctx.drawImage(resizeImg, 0, -h, w, h);
              break;

            case 8: // 倒着拍
              canvas.width = h;
              canvas.height = w;
              ctx.rotate(270 * Math.PI / 180);
              ctx.drawImage(resizeImg, -w, 0, w, h);
              break;

            default:
              ctx.drawImage(resizeImg, 0, 0, w, h);
              break;
          }

          cb(canvas);
        })

        
      },

      // 处理图片的宽高
      getResizeImg: function(img) {
        var width = img.naturalWidth;
        var height = img.naturalHeight;
        var MAX = this.MAX_WIDTH;
        var scale = 1;

        // 其中 一边超过限定值
        if (width > MAX || height > MAX) {
          // 防止宽高 都大于 限定值 的情况
          if (width > height) scale = MAX / width;
          else scale = MAX / height;
          
          img.width *= scale;
          img.height *= scale;
        }
        
        return img;
      },

      // 判断是否需要压缩
      beforeCompress: function(canvas, file) {
        var fileSize = file.size / 1024;
        var MAX = this.MAX_FILE_SIZE;

        if (fileSize > MAX) {
          this.compress(canvas, MAX);
        } else {
          this.finish({
            file: file,
            base64: canvas.toDataURL('image/jpg')
          })
        }
      },

      // 压缩
      compress: function(canvas, MAX, ratio) {
        ratio = ratio || 0.05;
        var gap = 1;
        var step = gap / ratio;
        var file = {};
        var base64 = '';
        var _this = this;
        
        try{
          for (var i = step; i > 0; i--) {
            gap -= (0.05 * gap);
            base64 = canvas.toDataURL('image/jpeg', gap); // 必须是 jpeg
            file = _this.base64ToBlob(base64, 'compress_file_' + Math.random());
            
            if (file.size / 1024 < MAX) break;
          }
        } catch(e) {
          return this.errorHandler('COMPRESS_ERROR');
        }

        this.finish({
          file: file,
          base64: base64
        })
      },

      // base64 转 Blob 对象
      base64ToBlob: function(base64) {
        var arr = base64.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);

        while (n--) u8arr[n] = bstr.charCodeAt(n);

        return new Blob([u8arr], {
          type: mime
        });
        
      }
    }
  })

  window.CompressImg = function(file, opts) {
    return new CompressImg(file, opts);
  }
})()
