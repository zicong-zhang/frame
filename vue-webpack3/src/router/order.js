const orderIndex = () => import(/* webpackChunkName: "order" */ '@views/order');

const orderRouter = [{
  path: '/order',
  name: 'order',
  component: orderIndex
}]

export default orderRouter;
