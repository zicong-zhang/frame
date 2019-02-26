const noFound = () => import(/* webpackChunkName: "404" */ '@views/404');

const noFoundRouter = [{
  path: '*',
  name: '404',
  component: noFound
}]

export default noFoundRouter;
