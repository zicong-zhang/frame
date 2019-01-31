/**
 * 获取焦点
 */
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
})
