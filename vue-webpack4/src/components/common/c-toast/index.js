import Vue from 'vue';
import VToast from './main.vue';

const VToastConstructor = Vue.extend(VToast);

const $Toast = (txt, timeout = 1500) => new Promise(resolve => {
  const instance = new VToastConstructor().$mount(document.createElement('div'));

  document.body.appendChild(instance.$el);

  instance.timeout = timeout;
  instance.resolve = resolve; // 传入resolve
  // 显示文本
  instance.$nextTick(() => instance.onShowText(txt));
});

export default $Toast;
