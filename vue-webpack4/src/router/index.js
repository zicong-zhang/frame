import Vue from 'vue';
import VueRouter from 'vue-router';

import listRouter from './list';
import orderRouter from './order';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '@views/home')
}].concat(
  listRouter,
  orderRouter,
)

export default new VueRouter({
  routes
})
