/**
 * timeout toast 网络异常
 * code500 toast 系统繁忙
 * code == -2 toast 感叹号
 */

let ajaxArr = {};

Vue.prototype.$http = function(url, req, success, err, opt = {}) {
	var get_location = window.localStorage.getItem('GET_CURRENT_LOCATION') || '';
	if(get_location){
		get_location = JSON.parse(get_location);
		if(!req.latitude && !req.longitude){
			req.latitude = get_location.latitude;
			req.longitude = get_location.longitude;
		}		
	}

  // 防止某些提交数据的接口重复提交
  if (opt.noRepeat && ajaxArr[url]) {
    console.error('已拦截重复操作')
    return false;
  }
  ajaxArr[url] = true;
	
  let _httpUrl = filterUrl(url, opt, API_ENV);
  let _data = formatReq(req, opt, url);
  let _ajaxConfig = {
    data: _data,
    type: opt.type || 'POST',
    dataType: 'json',
    contentType: url === 'img' ? false : 'application/json; charset=utf-8',
    processData: (opt.type == 'GET'), // 默认情况下，通过data选项传递进来的数据，都会处理转化成一个查询字符串
    cache: false, // 默认: true,dataType 为 script 和 jsonp 时默认为false,设置为 false 将不缓存此页面
    async: true,
    timeout: 10000,
    beforeSend(xhr) {
      // 自动开启loading
      if (opt.autoLoading && loadingDom) loadingDom.showLoading();
    },
    complete(data) {
      let res = data.responseJSON;

      if (opt.noRepeat) ajaxArr[url] = false; // 清除队列项
      if (opt.log) httpLog('req', _data);
      if (opt.complete) {
        opt.complete(res);
      } else if (typeof opt === 'function') {
        opt(res);
      }

      // 自动关闭loading
      if (opt.autoLoading && loadingDom) loadingDom.hideLoading();
    },
    success(data) {
      if (opt.log) httpLog('success', url, data);

      if (url === 'img' && success) return success(data); //  图片返回数据没有格式化

      if (data.code == 200) {
        if (success) success(data);

        // 未登录
      } else if (isInvalidToken(data.code)) {
        data.noLogin = true;
        return (vm.$toast('登录超时，请重新登录').then(() => {
          utils.clearUserInfo();
          invalidTokenToReLogin(data);
        }));

      } else {
        if (err && typeof err === 'function') {
          err(data);
        } else {
          vm.$toast(data.msg);
        }
      }
    },
    error(XMLHttpRequest, textStatus, errorThrown) {
      console.log('XMLHttpRequest', XMLHttpRequest, textStatus, errorThrown)
      let _errorData = {
        msg: null,
        data: [],
        code: -999
      }

      switch (true) {
        case textStatus == 'timeout':
          vm.$toast('网络连接超时');
          break;
        case XMLHttpRequest.status == 500:
          vm.$toast('系统繁忙')
          break;
        default:
          vm.$toast('网络异常，请检查网络设置');
          break;
      }
      // if (opt.log) httpLog('err', _errorData, textStatus, XMLHttpRequest);
    }
  }
  $.ajax(_httpUrl, _ajaxConfig);
}

// 带自动loading
Vue.prototype.$http2 = function(url, req, success, err, opt = {}) {
  // let params = JSON.parse(JSON.stringify(opt)); 无法拷贝函数
  opt.autoLoading = opt.autoLoading === 'no' ? false : true;

  Vue.prototype.$http(url, req, success, err, opt);
}

// promise
Vue.prototype.$http3 = (url, req, opt = {}) => {
  return new Promise((resolve, reject) => {
    const rej = opt.catch ? reject : '';
    Vue.prototype.$http(url, req, resolve, rej, opt);
  })
}









function httpLog(type, data1, data2, data3) {
  switch (type) {
    case 'req':
      if (typeof data1 === 'string') {
        console.log('请求参数:_____', JSON.parse(data1));
      }
      break;
    case 'success':
      console.warn(data1, data2);
      break;
    case 'err':
      console.error('_errorData:_____', data1, data2, data3);
      break;
  }
}

// 过滤处理请求路径
function filterUrl(_url, _opt, _env) {
  let filterUrl = null;

  // 自定义接口
  if (_opt.ip) {
    filterUrl = _opt.ip + _url;
    // 上传图片接口
  } else if (typeof _url === 'string' && _url === 'img') {
    filterUrl = _env + '/upload';
    // 优惠券模块接口
  } else if (_opt.coupon) {
    filterUrl = COUPON_ENV + _url;
    // 标准接口
  } else {
    filterUrl = _env + _url;
  }

  return filterUrl;
}

// 获取 用户 token
function getToken() {
  let token = utils.getUserToken();
  if (token) {
    return token;
  } else {
    return '';
  }
}

// 判断平台 ios / Android
function getPF() {
  let pf = window.sessionStorage.getItem('PF');

  if (pf !== null) return pf;

  let u = navigator.userAgent,
    app = navigator.appVersion;
  let isAndroid = /Android/i.test(u);
  let isIOS = /(iPhone|iPad|iPod|iOS|MAC)/i.test(u); //ios终端
  if (isAndroid) {
    pf = 'Android';
  } else if (isIOS) {
    pf = 'ios'
  } else {
    pf = u;
  }
  window.sessionStorage.setItem('PF', pf);
  return pf;
}

// 客户端表示
// 格式 设备型号|生产厂商|设备id|mac地址
function getUA() {
  let device = getDeviceInfo();
  let browser = getBrowserInfo();
  let ip = null;
  try {
    ip = returnCitySN.cip;
  } catch (err) {
    ip = 'NULL';
  }
  return `${browser}|${device}|NO_DEVICE_ID|${ip}`;
}
// 获取设备信息
function getDeviceInfo() {
  let device = null;

  if (getPF() == 'Android') {
    try {
      device = navigator.userAgent.match(/(Android.*)\sbuild/i)[1].replace(/(\;\s)/g, '|');
    } catch (e) {
      device = navigator.userAgent;
    }

  }

  if (getPF() == 'ios') {
    let h = screen.height;
    let w = screen.width;

    if (h == 812 && w == 375) {
      device = 'iPhoneX';
    } else if (h == 736 && w == 414) {
      device = "iPhone6P/iPhone7P/iPhone8P";
    } else if (h == 667 && w == 375) {
      device = "iPhone6/iPhone7/iPhone8";
    } else if (h == 568 && w == 320) {
      device = "iPhone5";
    } else {
      device = "iPhone4";
    }
  }
  return device;
}
// 获取浏览器信息
function getBrowserInfo() {
  let ua = window.navigator.userAgent;
  let browser = null;

  // 判断浏览器
  switch (true) {
    case /dingtalk/i.test(ua): // 必须置于UC前判断
      browser = 'dingding'
      break;
    case /UC/i.test(ua):
      browser = 'ucBrowser';
      break;
    case /baidu/i.test(ua):
      browser = 'baiduBrowser'
      break;
    case /baiduboxapp/i.test(ua):
      browser = 'baiduApp'
      break;
    case /micromessenger/i.test(ua): // 必须置于qq浏览器前判断
      browser = 'wx'
      break;
    case /MQQBrowser/i.test(ua):
      browser = 'QQBrowser'
      break;
    case /miuiBrowser/i.test(ua):
      browser = 'xiaomiBrowser'
      break;
    case /vivoBrowser/i.test(ua):
      browser = 'vivoBrowser'
      break;
    case /oppoBrowser/i.test(ua):
      browser = 'oppoBrowser'
      break;
    case /MZBrowser/i.test(ua):
      browser = 'meizuBrowser'
      break;
    case /huawei/i.test(ua):
      browser = 'huaweiBrowser'
      break;
    case /Chrome/i.test(ua):
      browser = 'Chrome'
      break;
    case /Safari/i.test(ua):
      browser = 'Safari'
      break;
    default:
      browser = ua;
      break;
  }

  return browser;
}

// post 请求参数
function getPostRequest(_req, _opt) {
  let req = {
    client: {
      caller: "web",
      deviceId: null,
      ex: {},
      pf: getPF(),
      ua: getUA(),
      vCode: 0,
      vName: "1.0.0"
    },
    data: { ..._req
    },
    encrypt: "string",
    requestId: "string",
    sign: "string"
  }
  
  let token = '';
  if (_opt.token &&  _opt.token !== '') {
    // 原生
    token = _opt.token;
  } else {
    if (_opt.token === '') {
      token = '';
    } else {
      token = getToken();
    }
  }

  req.data.token = token;

  return JSON.stringify(req);
}

// 图片上传参数
function uploadImgParams(_req, _opt) {
  let req = new FormData();
  const token = _opt.token === 'default' 
    ? 'VE9LRU4tMTEtMTU0MjE2MTk1ODEyNi0xMS1hYmM_'
    : getToken()

  req.append('files', _req.files);
  req.append('token', token);
  return req;
}

// 根据不同请求方式 格式化请求参数
function formatReq(_req, _opt, _url) {
  let data = null;

  if (_opt.type === 'GET') {
    data = {};

  } else if (typeof _req === 'object') {
    data = _url === 'img' ? uploadImgParams(_req, _opt) : getPostRequest(_req, _opt);

  } else {
    data = {};
  }

  return data;
}

// 判断 token 是否有效
function isInvalidToken(code) {
  /**
   * 100001	token 无效
   * 100002	token 获取用户id出错
   * 100003	token 获取时间戳出错
   * 100004	token 不能为空
   * 100005	token 超时
   * 100006	token 为空
   * 100007	token 无效的bizToken
   */
  let isUnValid = true;
  switch (code) {
    case 100001:
      /* case 100002:
      case 100003:
      case 100004:
      case 100005:
      case 100006:
      case 100007: */
      isUnValid = true;
      break;
    default:
      isUnValid = false;
      break;
  }

  return isUnValid;
}

// 重新登录（三端）
function invalidTokenToReLogin(data) {
  const {
    activeId,
    ua,
    native
  } = utils.urlToObj();

  // 原生
  if (native || activeId || ua != 'web') {
    alsj.reLogin()
    // web
  } else if (ua == 'web' || !native || !activeId) {
    utils.goLogin();

  }
}
