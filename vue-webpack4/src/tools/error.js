import $Toast from '@components/common/c-toast';

// 处理异步路由加载失败
export const catchRouterError = err => {
  $Toast('加载失败，请检查网络连接')
}
