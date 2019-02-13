
import Vue from 'vue';

import '@styles/app/index.scss';

import './directives';
import './components';

import router from '@router';
import store from '@vuex';
import App from './App';


Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.config.errorHandler = (err, vm, info) => {
  console.log('err, vm, info:_____', err, vm, info);
}



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
