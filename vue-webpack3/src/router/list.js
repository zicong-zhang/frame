import {
  catchRouterError
} from '@tools';

const listIndex = () => import(/* webpackChunkName: "list" */ '@views/list').catch(catchRouterError)

const listRouter = [{
  path: '/list',
  name: 'list',
  component: listIndex
}]

export default listRouter;
