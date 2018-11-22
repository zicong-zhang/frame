var _devNew = 'http://test.alasga.cn/proxy/web/gateway/api'; //测试环境
var _pro = `${window.location.protocol}//www.alasga.cn/gateway/api`; //正式环境
var _coupon_dev = 'http://test.alasga.cn/pro/coupon/coupon/api'; // 优惠券模块 测试环境
var _coupon_pro = `${window.location.protocol}//www.alasga.cn/coupon/api`; // 优惠券模块 正式环境

var _ROOT_PATH = `${window.location.origin}/dev/pages`
var _Lij = 'http://192.168.2.120:8080/gateway/api'; // 李璟
var _LH_Coupon = 'http://192.168.2.46:9113/api'; //罗宏
var _LH_jiaLe = 'http://192.168.2.188:8080/gateway/api'; //家乐
var API_ENV = '/api';
var COUPON_ENV = '/coupon/api'; // 优惠券相关模块
var QINIU_IMG_ROOT = 'http://test.pic.alasga.cn/'; // 七牛图片前缀
var _key = 'x18ywvqfxb3ec';
var iconImg = 'http://pic.alasga.cn/logo-300.jpg'; //统一分享的icon图标
switch (window.location.host) {
  case "www.alasga.cn":
    API_ENV = _pro;
    _key = 'x4vkb1qpxfltk';
    COUPON_ENV = _coupon_pro;
    _ROOT_PATH = `${window.location.protocol}//www.alasga.cn/h5/app/web/pages`;
    QINIU_IMG_ROOT = 'http://pic.alasga.cn/';
    break;
  case "test.alasga.cn":
    API_ENV = _devNew;
    COUPON_ENV = _coupon_dev;
    _ROOT_PATH = 'http://test.alasga.cn/pro/proxy/web/web/pages';
    break;
}
//share的链接
//var shareLink = 'http://test.alasga.cn/alasga-web/share/';   //测试环境
var shareLink = 'https://www.alasga.cn/share/'; //测试环境

var API = {
  appKey: _key, //正式，测试的appKey(x18ywvqfxb3ec)
  /* 注册登录 start */

  // 获取 登录验证码
  getLoginCaptCha: '/user/getLoginCaptcha',
  // 通过验证码登录
  userCaptChaLogin: '/user/userCaptchaLogin',
  // 账号密码登录
  userLogin: '/user/userLogin',
  // 获取 注册验证码
  getRegisterCaptcha: '/user/getRegisterCaptcha',
  // 提交 注册
  userRegister: '/user/userRegister',
  // 获取 忘记密码 验证码
  getForgetPasswordCaptcha: '/user/getFindPasswordCaptcha',
  // 提交 忘记密码
  submitForgetPassword: '/user/findPassword',

  /* 注册登录 end */


  /* 发现 start */

  // 学定制 banner
  getFindArticleBanner: '/bbsArticle/listTopCovers',
  // 获取 学定制 栏目标题
  getFindColumnsTitle: '/bbsSection/listPageBbsSection',
  // 根据栏目标题获取文章列表
  getFindArticleListByTitle: '/bbsArticle/listBbsArticleBySectionId',
  // 获取 发现页看案例维度名称
  getDimensionListByLookCase: '/bbsReferralDimension/listPageBbsReferralDimension',
  // 获取 案例列表
  getFindCaseList: '/BbsViewCase/listViewCase',
  // 判断案例是否已被当前用户点赞
  getCaseLikeStatus: '/bbsThumbCase/isBbsCaseThumb',
  // 判断案例是否已被当前用户收藏
  checkCollection: '/collection/case/checkCollection',
  // 案例收藏操作
  onCaseCollection: '/collection/case/collection',
  // 案例点赞操作
  onLike: '/bbsThumbCase/saveOrUpdateBbsThumbCase',
  // 根据栏目 id 获取文章列表
  getArticleListByColumn: '/bbsArticle/listBbsArticleBySectionId',
  // 获取 空间 标签
  getSpaceLabels: '/dimension/listSpace',
  // 获取 文章详情
  getArticleDetail: '/bbsArticle/getBbsArticleInfo',
  // 检查文章收藏
  checkArticleCollectionStatus: '/collection/article/checkCollection',
  // 文章收藏
  onArticleCollection: '/collection/article/collection',
  // 获取 案例详情
  getCaseDetail: '/merchantCase/getMerchantCaseInfo',


  /* 发现 end */

  /* 店铺 start */

  // 店铺主页 - 店铺信息
  getMerchantInfo: '/merchant/getMerchantInfo',
  // 店铺主页 - 分类数量统计
  listMerchantNearbyGroupsBrand: '/merchant/listMerchantNearbyGroupsBrand',
  // 店铺主页 - tab 数据统计
  getTabDataTotal: '/merchant/getMerchantCenterHomeTotal',
  // 店铺主页 - 获取店铺背景图
  getStoreBg: '/merchantTopCover/listPageMerchantTopCover',
  // 店铺主页 - 获取产品的空间列表
  getSpaceListByStore: '/merchantGoods/listGroupsBySpace',
  // 店铺主页 - 根据空间 获取产品列表
  getProductListBySpace: '/merchantGoods/listMerchantGoodsBySpace',
  // 店铺主页 - 获取设计师列表
  getDesignerListByStore: '/merchantStaff/listMerchantDesigners',
  // 店铺主页 - 获取案例列表
  getCaseListByStore: '/merchantCase/listMerchantCase4Consumer',
  // 店铺主页 - 获取广告 banner 数据
  getBannerAdData: '/merchantBanner/listMerchantBanner4Consumer',
  // 店铺主页 - 获取店铺关注状态
  getFollowStatusByStore: '/follow/merchant/checkFollow',
  // 店铺主页 - 店铺关注
  followStatusByStore: '/follow/merchant/follow',
  // 店铺主页 - 获取咨询人员
  getTalker: '/merchantStaff/getMerchantConsultant',
  // 店铺主页 - 检查是否允许认领店铺
  checkClaimStore: '/merchantApply/checkMerchantApply',
  // 店铺认领 - 获取上一次认领的信息
  getPrevClaimInfo: '/merchantApply/getMerchantApplyInfo',
  // 店铺认领 - 提交认领
  submitClaimStore: '/merchantApply/saveMerchantApply',


  // 产品详情 - 根据店铺id获取当前店铺产品中心的产品总数和产品所在的店铺信息
  countMerchantGoodsInfo: '/merchantGoods/countMerchantGoodsInfo',
  // 产品详情 - 获取详情数据
  getProductDetailData: '/merchantGoods/getMerchantGoodsInfo',
  // 产品详情 - 获取店铺基础信息 和 产品数量
  getStoreInfoAndQtyByProductDetail: '/merchantGoods/countMerchantGoodsInfo',
  // 检查产品收藏状态
  checkProductCollectionStatus: '/collection/goods/checkCollection',
  // 添加/取消 收藏产品
  onProductCollection: '/collection/goods/collection',
  // 提交预约量尺
  submitGauge: '/merchantMsgMeasure/saveMerchantMsgMeasure',


  // 获取 设计师信息
  getDesignerInfo: '/merchantStaff/getMerchantDesignerInfo',
  // 获取 设计师被关注状态
  getDesignerFollowStatus: '/follow/designer/checkFollow',
  // 获取 设计师案例列表
  getDesignerCase: '/merchantCase/listMerchantCaseByMerchantStaffId',
  // 添加设计师关注
  followForDesigner: '/follow/designer/follow',

  /* 店铺 end */

  /* 消息通知 start */
  // 获取最新一条订单消息
  getLatestOrderNotice: '/messageOrder/getLast4Consumer',
  // 获取订单消息列表
  getLatestOrderNoticeList: '/messageOrder/list4Consumer',
  // 更新一条订单消息未读状态
  updateOrderNoticeUnRead: '/messageOrder/updateReadStatus',
  // 获取最新一条系统消息
  getLatestSystemNotice: '/messageSys/getLast4Consumer',
  // 获取系统消息列表
  getLatestSystemNoticeList: '/messageSys/list4Consumer',
  // 更新所有系统消息的状态为已读
  updateSystemNoticeUnRead: '/messageSys/updateReadStatus',

  /* 消息通知 end */

  //主页-附近的店
  indexGetNearShop: '/merchant/nearby/list',
  //主页-推荐标签展示
  indexGetRecommendTips: '/homeReferralDimension/listHomeReferralDimension',
  //主页-推荐查询展示
  indexGetRecommendSelectTip: '/homeReferralDimension/listHomeReferralGoods',
  //主页-轮播图展示
  indexGetBannerList: '/activityBanner/home/listActivityBanner',
  //主页分类及筛选数据
  indexFilterData: '/dimension/listSpace',
  //主页侧滑选择风格数据展示
  indexGetStyleList: '/style/listPageStyle',
  //主页-筛选选择-根据actionId
  indexSiftGoodsByActionId: '/merchantGoods/listHomeSiftGoods',

  //订单列表
  listByUid: '/order/listByUid',
  //订单详情
  getOrderInfo: '/order/getOrderInfo',
  //订单详情-跟进人列表
  listOrderKeeper: '/orderKeeper/listOrderKeeper',
  //订单详情-检查是否可以支付（一天只能支付一单）
  checkToPay: '/pay/checkToPay',
  //交易记录列表
  listTransactionRecord: '/wallet/listTransactionRecord',
  //交易记录详情（线上）
  getTransactionRecord: '/wallet/getTransactionRecord',
  //交易记录详情（线下）
  listOrderOperate: '/orderOperate/list',
  //搜索银行列表
  listSearchByBankName: '/wallet/listSearchByBankName',
  //支付模块-搜索银行列表
  payByBankName: '/pay/listSearchByBankName',
  //搜索银行支行列表
  searchSubBank: '/wallet/searchSubBank',
  //获取默认支付信息
  getDefaultCard: '/pay/getDefaultCard',
  //绑定银行卡
  bindingCard: '/pay/bindingCard',
  //解绑银行卡
  unBindingCard: '/pay/unBindingCard',
  //获取是否设置了验证码的标志
  getBankInfo: '/wallet/getBankInfo',
  //钱包支付
  walletPayment: '/wallet/payment',
  //银联卡支付
  bankPayment: '/pay/payment',
  //检测银行卡号，注意：bankName,bankCode为空,需用调用另外一个接口（listBankCard）获取列表，用户手动去选择
  checkBankCardNo: '/pay/checkBankCardNo',
  //检测银行卡号，当bankName,bankCode为空,则调用此接口选择银行卡
  listBankCard: '/pay/listBankCard',
  //绑定銀行卡短信获取验证码
  obtainPaymentBindingVerificationCode: '/pay/obtainPaymentBindingVerificationCode',
  //获取自己绑定的银卡列表
  listMyCpcnBankCard: '/pay/listMyCpcnBankCard',
  //订单确认安装完成
  finishOrder: '/pay/finishOrder',
  //钱包-验证旧的密码是否正确
  verificationPayPassword: '/wallet/verificationPayPassword',
  //钱包-修改支付密码
  updatePayPassword: '/wallet/updatePayPassword',
  //钱包-找回密码步骤一
  retrievePayPasswordStepOne: '/wallet/retrievePayPasswordStepOne',
  //钱包-找回密码步骤二
  retrievePayPasswordStepTwo: '/wallet/retrievePayPasswordStepTwo',
  //进入激活钱包-华夏银行协议、阿拉私家协议
  sysList: '/sys/list',

  //激活钱包 第一步 输入前六位银行卡号获取银行卡信息
  verificationBankCode: '/wallet/verificationBankCode',
  //激活钱包 第二步 搜索关键字获取支行
  searchSubBank: '/wallet/searchSubBank',
  //激活钱包 第三步 聚合接口校验银行卡信息，保存银行卡信息(未开通)
  saveBankInfo: '/wallet/saveBankInfo',
  //激活钱包 第四步 激活钱包前获取验证码 （bizCode  1、激活银行卡：msg-011； 2、 找回支付密码：msg-012 ）
  sendCaptcha: '/sms/sendCaptcha',
  //激活钱包 第四步 通过绑定手机激活银行卡 开通华夏银行卡
  activeBankCard: '/wallet/activeBankCard',
  //激活钱包 - 第五步:设置支付密码
  setPayPassword: '/wallet/setPayPassword',
  //获取支付验证码
  obtainPaymentVerificationCode: '/pay/obtainPaymentVerificationCode',

  //主页-产品搜索列表
  searchGetProductList: '/merchantGoods/homeSearchGoods',
  //主页-店铺搜索列表
  searchGetStoreList: '/merchant/homeSearchMerchant',
  //主页-文章搜索列表
  searchGetArticleList: '/bbsArticle/homeSearchArticle',
  //主页-案例搜索列表
  searchGetCaseList: '/merchantCase/homeSearchCase',


  //附近的店铺-列表
  getNearList: '/merchant/nearby/list',
  //附近的店-根据店铺id搜索产品列表
  getPorductListByStoreId: '/merchantGoods/listMerchantGoods',
  //附近的店--城市分组列表
  getCityGroupList: '/merchant/getMerchantAreaGroupsByCity',
  //附近的店--品牌列表
  getCityBrandList: '/merchant/listMerchantNearbyGroupsBrand',
  //附近的店--按照城市code查询列表
  getStoreListByCityCode: '/merchant/nearby/listByArea',
  //附近的店--地图模式
  getNearStoreMap: '/merchant/nearby/listByWebmap',

  //我的-显示用户详情信息
  getUserInfoMsg: '/user/getUserInfo',
  //我的-显示用户关注、收藏等数量
  getUserBehavior: '/user/countBehaviorData',
  //我的-用户退出登录
  userOutLogin: '/user/userLoginOut',
  //我的-获取用户红包信息
  getUserPacketMsg: '/packetAccount/getPacketAccountInfo',
  //我的-红包提现接口
  userPacketAmountOut: '/packetAmountOutHistory/savePacketAmountOutHistory',
  //我的-红包用户提现记录
  listPacketAmountOutHistory: '/packetAmountOutHistory/listPacketAmountOutHistory',
  //我的-红包提现详情
  getPacketHistoryInfo: '/packetAmountOutHistory/getPacketAmountOutHistoryInfo',
  //我的-红包明细列表
  listPacketAmountHistory: '/packetAmountHistory/listPacketAmountHistory',
  //我的-用户收藏案例列表
  getCaseCollectList: '/collection/case/listCollection',
  //我的-用户收藏产品列表
  getProductCollectList: '/collection/goods/listCollection',
  //我的-用户收藏文章列表
  getArticleCollectList: '/collection/article/listCollection',
  //我的-关注设计师列表
  getDesignerConcernList: '/follow/designer/listFollow',
  //我的-关注店铺列表
  getStoreConcernList: '/follow/merchant/listFollow',
  //我的-获取个人资料详情
  getUserDetailMsg: '/user/getUserInfo',
  //我的-个人资料-判断用户有无设置密码
  getUserIsSetPassword: '/user/checkPasswordExist',
  //我的-个人资料-修改用户密码
  updateUserPassword: '/user/updatePassword',
  //我的-个人资料-修改用户详情
  updateUserMsg: '/user/updateUserInfo',
  //我的-个人资料-用户设置密码-获取验证码 (特殊："bizCode": "msg-006")
  getSetPasswordCode: '/sms/sendCaptcha',
  //我的-个人资料-用户设置密码（没设置过）
  setUserPassword: '/user/findPassword',
  // 我的 - 个人资料 - 更改用户绑定的手机号
  updateUserPhone: '/user/changePhone',
  //我的-意见反馈-提交
  userSetFeedback: '/userSuggestion/saveUserSuggestion',

  //消息
  getUserByList: '/user/getUserByList',

  // 分享相关 start

  // 获取微信分享数据
  getWxShareData: '/wechat/share/getShareSign',
  // 分享相关 end

  //添加店员
  scanAdd: '/merchantStaff/scanAdd',

  //优惠券 start

  //兑换优惠券
  exchangeCoupon: '/exchanges',
  //获取优惠券列表 1-未使用 2-已使用 3-已过期 4-已失效 5-占用中
  getUserCouponList: '/list',
  // 通过券号获取优惠券信息
  getCouponInfoByVoucher: '/getInfoByVoucher',
  // 领取用户赠送的优惠券
  claimCouponByUserSend: '/share/receive',

  //取消赠送优惠券
  userCancelCoupon: '/cancelTransfer',
  //转赠优惠券
  userGiftCoupon: '/share/transfer',
  //支付获取优惠券
  listDeduction: '/listDeduction',
  //优惠券 end

  //首页广告位 start

  //弹窗广告位列表
  getIndexAdsenseList: '/promote/listByOriginId',
  getContent: '/promote/getContent',
  //首页广告位 end

  //计算报价 start
  //获取板材列表
  getMaterialList: '/material/listMaterial',
  //获取业主数量
  getOwnerNum: '/quotation/getTotal',
  //计算最终报价
  getValuatePrice: '/quotation/valuate',
  //计算报价 end

  /* 通用接口 start */
  // 聚合通用验证码
  getCommonCaptcha: '/sms/sendCaptcha',
  // 检验验证码
  checkCaptcha: '/sms/checkCaptcha',
  // 已注册手机号获取验证码
  getSendIfRegistered: '/sms/sendIfRegistered',
  // 未注册手机号获取验证码
  getSendIfNotRegister: '/sms/sendIfNotRegister',
  // 获取七牛token
  getQiNiuToken: '/upload/getQiniuToken',

  /* 通用接口 end */
  /*分期start*/
  //获取分期支付时需支付的金额
  getInstalmentAmount: '/instalment/getInstalmentAmount',
  //	去分期
  jumpInstalment: '/instalment/jumpInstalment',
  //保存分期成功截图
  uploadVoucher: '/instalment/uploadScreenshot',
  //取消分期
  cancelInstalment: '/instalment/cancelInstalment',
  //获取可用的分期支付方式
  listUseableInstalment: '/instalment/listUseableInstalment',
  // 获取民生分期费率
  getCMBCStagingRate: '/instalmentRate/getInstalmentRateInfo',
  // 计算分期还款金额
  countRepaymentAmount: '/instalmentRate/calculateRepayment',
  /*分期end*/

  /* 开放城市接口 */
  //获取开放城市列表
  getOpenCityList: '/openCity/list',
  
  /*优惠券*/
	centreList: '/centre/list',  //优惠券列表
	receive: '/receive',  //领取优惠券
	
	/*4.0开始*/
	//首页金融产品列表
	getFinanceProduct:'/financeProduct/list',
	/*首页-私家优选列表*/
	getPreferenceList:'/preference/listByCityCode',
	getCategoryList:'/homeCategory/listPage',
	getStoreListByCategory:'/merchant/listSiftByIndustry',
	/*获取全部行业及其品类*/
  listIndustryAndCategory: '/category/listIndustryAndCategory',	
  /*私家优选详情*/
  getInfo: '/preference/getInfo',	
  /*店铺主页-大家都在逛*/
  getNearbyHotList:'/merchant/nearby/hot',
  /*城市列表*/
  listAllCityGroupByInitial: '/area/listAllCityGroupByInitial',
  // 附近 - 根据地区,行业,二级品类 筛选店铺分页列表
  getNearFilterList: '/merchant/listSiftByAreaCategory',
  // 附近 - 根据当城市code,获取当前城市所有地区列表
  getNearDistrictList: '/merchant/getMerchantAreaGroupsByCity',
  // 附近 - 获取一级行业列表
  getNearIndustryList: '/category/listIndustry',
  // 附近 - 通过行业 id 获取二级品类列表
  getNearCategoryListByIndustry: '/merchant/listCategoryAndMerchantCounts',

  listByKwGroupsInitial:'/openCity/listByKwGroupsInitial',
  /*金融产品详情*/
  financeGetInfo:'/financeProduct/getInfo',
	/*4.0结束*/
}