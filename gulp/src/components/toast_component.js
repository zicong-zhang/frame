/**
 * toast 两种调用方式
 * callback {Function} toast 消失后的回调函数
 * timeout {Number} toast 悬停事件
 * success {Boolean} toast 的图标是否为 “√”
 */
// 注：this 指向 Vue 实例
// 注：this 指向 Vue 实例
// 注：this 指向 Vue 实例
/* 
1 this.$toast('这里是文案', callback)

2 this.$toast({
  text: '这里是文案',
  timeout: 1000, // 默认 2000 (ms)
  success: true // 默认 false
}, callback)
*/
  const toastComponent = {
    template: /*html*/ `
    <div
      v-if="isShowToast"
      class="toast-component"
    >
      <transition
        name="toast-component"
        @after-leave="finish"
      >
        <div
          v-show="isShowContent"
          class="toast-box"
        >
          <img :src="rightImg"  v-if="success"/>
          <img :src="warnImg" v-else/>
          <p>{{ text }}</p>
        </div>
      </transition>
    </div>
  `,
    data() {
      return {
        rightImg: RIGHT_IMG,
        warnImg: WARN_IMG,
        success: false,
        text: '',
        isShowToast: true,
        isShowContent: false,
        timeout: 2000,
        cb: null
      }
    },
    mounted() {
      this.isShowContent = true;
      this.hide();
    },
    methods: {
      hide() {
        let timer = setTimeout(() => {
          this.isShowContent = false;
        }, this.timeout + 200);
        this.$once('hook:beforeDestroy', () => {
          clearTimeout(timer);
          timer = null;
        })
      },
      finish() {
        this.isShowToast = false;
        if (this.cb) this.cb();
      }
    }
  }

  let ToastConstructor = Vue.extend(toastComponent);

  Vue.prototype.$toast = (textOrOpts, cb) => {
    const instance = new ToastConstructor().$mount(document.createElement('div'));
    
    let text = '';
    let opts = {
      timeout: 2000
    }
    const type = typeof textOrOpts;
    if (type === 'string') {
      text = textOrOpts;
    } else if (type === 'object') {
      text = textOrOpts.text;
      Object.assign(opts, textOrOpts);
    }
    
    instance.text = text;
    instance.timeout = opts.timeout;
    instance.success = opts.success;
    instance.cb = cb;

    document.body.appendChild(instance.$el);
  }




var RIGHT_IMG = 'data:image/png;base64,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';

var WARN_IMG = 'data:image/png;base64,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';
