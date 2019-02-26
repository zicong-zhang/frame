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

export default new VueRouter({
  mode: 'history',
  routes
})
