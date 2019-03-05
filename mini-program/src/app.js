import request from './network/fetch'
App({
  // 自定义 request
  request (apiName, reqParams, ...option) {
    return request(apiName, reqParams, ...option)
  },
})
// 1
