const orderIndex = () => import(/* webpackChunkName: "order" */ '@views/order');

const orderRouter = [{
  path: '/order',
  name: 'order',
  component: orderIndex,
  meta: {
    keepAlive: true,
    auth: true
  }
}]

export default orderRouter;
