import Vue from 'vue';
import VueRouter from 'vue-router';

import listRouter from './list';
import orderRouter from './order';
import noFoundRouter from './404';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '@views/home')
}].concat(
  listRouter,
  orderRouter,
  // ... more router
  noFoundRouter
)

const beforeEach = (to, from, next) => {
  console.log('to, from:_____', to, from);
  
  // 鉴权
  if (to.meta.auth) {
    // ...
  }

  next();
}

const scrollBehavior = (to, from, position) => {
  if (position) return position;

  return {
    x: 0,
    y: 0
  }
}

export default new VueRouter({
  mode: 'history',
  // base: '/dist/', // vscode 开启 Live Server 时启用
  routes,
  beforeEach,
  scrollBehavior
})
