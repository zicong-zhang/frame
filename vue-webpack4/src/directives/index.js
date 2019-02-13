import Vue from 'vue';
import {
  on,
  off
} from '@tools';

/**
 * 按钮按下效果
 */
const addButtonClassNameDirective = e => {
  e.target.classList.add('d-button');
}
const removeButtonClassNameDirective = e => {
  e.target.classList.remove('d-button');
}
Vue.directive('button', {
  bind(el) {
    on(el, 'touchstart', addButtonClassNameDirective);
    on(el, 'touchend', removeButtonClassNameDirective);
  },
  unbind(el) {
    off(el, 'touchstart', addButtonClassNameDirective);
    off(el, 'touchend', removeButtonClassNameDirective);
  }
})
