//swiperInit()
var vm = new Vue({
	el:"#home",
	data:{
		tabIndex:0,
		slideIndex:0,
		styleIndex:0,
		filterIndex:'1000',
		showSlide:false,
		headerBarFixed:false,
		normal_network:true,
		headerTitle:[],
		slideTitle:[{name:'分类'},{name:'筛选'}],
		styleTitle:[{name:'空间'},{name:'风格'}],
		nearShopList:[],//附近的店
		recommendList:[],
		productData:[],
		bannerList:[],
		getHistory:{},
		areaPoint:{},
		information:'',
		cityName:'',
		initData:{
			type:'',
			id:''
		},
		noProDataByRecommend:false,
		noProDataByFilterData:false,
		showAdsense:true,
		adsenseTapList:[],
		adsenseScrollList:[],
		showH5GiftCoupon:true,
		showLocationTip:false,
		showChangeCity:false,
		openCityList:[],
		cityCodeData:[],
		cityCode:'',
		areaMsg:{},
		newCityName:'',
		newPoint:{},
		cityNewCode:'',
		isiOS:false,
		pageNum:1,
		loadText:'上拉加载...',
		loadMore:false,
		storeList:[],
		minHeight:'',
		noMore:false,
		id:'',
		preferenceList:[],
		categoryList:[],
		financeProduct:[],
		nearAddress:'',
		imgLogo:'',
		imgLink:'',
		location:''
	},
	methods:{
	    toStoreIndex:function(id) {
	      utils.openUrl('../../pages/store/index.html', {
	        id: id
	      })
	    },
		toSearch:function(){
			window.location.href="../../pages/search/search.html";
		},
		toMine:function(){
			utils.openUrl('../../pages/mine/mine.html', {})
	    },
	    toFind: function() {
	      utils.openUrl('../../pages/find/find.html');
	    },
	    toNotice: function() {
	      utils.openUrl('../../pages/notice/notice_index.html');
	    },
		toProduct:function(_item,_id){
			var VUE = this;
			VUE.information = utils.getUserInfo();
			if(VUE.information){
				VUE.userHistory(_item); //存储足迹记录
			}
			utils.openUrl('../../pages/product/product_detail.html', {
				id:_id
			})
		},
		toSwichCity(val){
			sessionStorage.removeItem('onceShowLocationTip'); //清除提示框已经被点击的缓存
			window.location.href=val;
		},
		//存储足迹缓存
		userHistory:function(_item){
			var VUE = this;
			var num = localStorage.getItem('historyNum') || 0;
			if(localStorage.getItem('userHistory')){
				VUE.getHistory = JSON.parse(localStorage.getItem('userHistory'));
				for(let i=0;i<VUE.getHistory.length;i++){
					if(VUE.getHistory[i].goodsId == _item.id){
						VUE.getHistory.splice(i,1);
					}
				}
				VUE.getHistory.push({goodsId:_item.id,goodsName:_item.goodsName,goodsCover:_item.goodsCover});
				var historyStr = JSON.stringify(VUE.getHistory);
				localStorage.setItem('userHistory',historyStr);
			}else{
				num=1;
				VUE.getHistory = [{goodsId:_item.id,goodsName:_item.goodsName,goodsCover:_item.goodsCover}];
				var historyStr = JSON.stringify(VUE.getHistory);
				localStorage.setItem('userHistory',historyStr);
			}
			
		},
		banner:function(_data){
			var VUE = this;
			VUE.bannerList = _data;
			//轮播图
			setTimeout(function () {
				new Swiper('.swiper-container1', {
					speed: 450,
					pagination: {
						el: '.pagination',
						bulletElement: 'li',
						currentClass: 'my-pagination-current'
					},
					autoplay: {
						delay: 2300,
						disableOnInteraction: false
					},
					loop: true,
					preventLinksPropagation: false
				});
			}, 300)
		},
		bannerLink: function (type, url) { // 点击banner图跳转及担保赔付、存管资金页面跳转
			if(type == 1 || type == 2){ //type为3时不可跳转
				window.location.href = url;
			}
		},
		linkOut(title,val){
			window.location.href = val;
		},
		toNearStore:function(){
			window.location.href = "../../pages/nearStore/nearStore.html";
		},
		// 获取定位
	    getArea:function(type) {
	    	var VUE = this;
			var mapDom = document.createElement('div');
		    mapDom.style.display = 'none';
		    mapDom.id = 'allmap';
		    document.querySelector('body').appendChild(mapDom);
		    // 百度地图API功能
		    var map = new BMap.Map("allmap");
		    var point = new BMap.Point(116.331398, 39.897445);
		    map.centerAndZoom(point, 12);
		
		    var geolocation = new BMap.Geolocation();
		    var gc = new BMap.Geocoder();
		    
		    geolocation.getCurrentPosition(function(r) {
		      	if (this.getStatus() == BMAP_STATUS_SUCCESS) {
			        var mk = new BMap.Marker(r.point);
			        map.addOverlay(mk);
			        map.panTo(r.point);
			        var pt = r.point; 
//			        if(type == 1){ //用户点击切换城市或用自定位的数据
			        	var _area = {};
			        	_area.lng = pt.lng;
				        _area.lat = pt.lat;
				        VUE.areaPoint = _area;
//			        }  
			        gc.getLocation(pt, function(rs){  
			            var addComp = rs.addressComponents; 
			            var city_code = '';
			            VUE.newCityName = addComp.city;
			            VUE.cityCodeData.map(function(item){ //获取对应的cityCode
				        	if(item.name == addComp.city){
				        		VUE.cityNewCode = city_code = item.cityCode;
				        		VUE.cityId = item.id;
				        	}
		        		})
			            var area = window.localStorage.getItem('GET_CURRENT_LOCATION');
				        if(area){
				        	var location = JSON.parse(area);
				        }else{
				        	//若是没有缓存，初始化缓存数据
				        	//重新写入缓存
				        	window.localStorage.setItem('GET_CURRENT_LOCATION', JSON.stringify(r));
				   			var location = window.localStorage.getItem('GET_CURRENT_LOCATION'); //拿到的定位信息
				   			if(location){
				   				location = JSON.parse(location);
				   				location.address.city = addComp.city;
						    	location.address.cityCode = city_code;
						    	location.address.cityId = VUE.cityId;
						    	location.point = {"lng":pt.lng,"lat":pt.lat};
						    	window.localStorage.setItem('GET_CURRENT_LOCATION', JSON.stringify(location));
//						    	console.log('----'+JSON.stringify(location));
				   			}
				        }
			            if(type==1){
			            	VUE.cityName = addComp.city; //获取城市名
			            	VUE.getOpenCityList(city_code,VUE.newCityName); //获取开放城市列表，并在这限制显示未开放城市提示
			            	VUE.cityCode = city_code;
			            	VUE.getPreferenceList(); //获取私家优选列表
			            	//初始化数据
			            	VUE.$loading();
							VUE.pageNum = 1;
							VUE.loadMore = false;
							VUE.noMore = false;
							VUE.loadText = '上拉加载...';
							VUE.storeList = [];
			            	VUE.getStoreList(VUE.id); //获取附近的店列表
			            	VUE.getLocation();
			            }
			            if(type == 0){
			            	VUE.cityCodeData.map(function(item){ //获取对应的cityCode
					        	if(item.name == addComp.city){
					        		VUE.cityCode = item.cityCode;
					        		VUE.cityId = item.id;
					        	}
			        		})
				        	if(VUE.areaMsg.cityCode){
				        		VUE.areaPoint = VUE.areaMsg;
				        		if(VUE.areaPoint.cityCode != VUE.cityCode){
				        			VUE.cityName = VUE.areaPoint.cityName; //获取城市名
				        			VUE.cityCode = VUE.areaPoint.cityCode;
				        			VUE.isSameCity(); //获取选择城市缓存，并在这限制显示切换城市弹窗
				        			VUE.getPreferenceList(); //获取私家优选列表
				        			//初始化数据
					            	VUE.$loading();
									VUE.pageNum = 1;
									VUE.loadMore = false;
									VUE.noMore = false;
									VUE.loadText = '上拉加载...';
									VUE.storeList = [];
				        			VUE.getStoreList(VUE.id); //获取附近的店列表
				        			VUE.getLocation();
				        		}else{
				        			VUE.getArea(1); //根据当前定位获取数据
				        		}
				        	}
			           }
			        });
		      } else {
		        utils.locationStorageMap();
		      }
		    }, {
		      enableHighAccuracy: true
		    })
	    },
	    getLocation(){
	    	var VUE = this;
			var map = new BMap.Map("allmap");
		    var point = new BMap.Point(VUE.areaPoint.lng, VUE.areaPoint.lat);
		    map.centerAndZoom(point, 12);
		    var geolocation = new BMap.Geolocation();
		    var gc = new BMap.Geocoder();
		    geolocation.getCurrentPosition(function(r) {
		        gc.getLocation(point, function (rs) {  
		            var addComp = rs.addressComponents;  
//					VUE.nearAddress = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
//					if(addComp.province == addComp.city){
//						VUE.nearAddress = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
//					}
					VUE.nearAddress = addComp.district + addComp.street + addComp.streetNumber;
		        });  
			})
	    },
	    //获取附近的店
	    getNearStore(){
	    	var VUE = this;
	    	VUE.$loading();
	    	//首页-获取附近的店铺
	        let shop = {
				brandId:"",
				latitude:VUE.areaPoint.lat || 23.1194300000,
				longitude:VUE.areaPoint.lng || 113.3212200000,
				pageNum:1,
				pageSize:5,
				radius:20000,
				token:""
			}
			VUE.$http(API.indexGetNearShop, shop, data => {
				VUE.nearShopList = data.data.list;
				VUE.$loading(false);
			}, err => {
				this.$toast(err.msg);
				VUE.$loading(false);
			},{token:''})
	   },
	    refresh:function(){
	   		window.location.reload();
	    },
	    //网络检测
	    isNetwork:function(){
	    	var VUE = this;
			window.addEventListener('online',  function(){
				VUE.normal_network = true;
			});
			window.addEventListener('offline', function(){
				VUE.normal_network = false;
			});
	    },
	    closeAdsense:function(){
	    	var VUE = this;
	    	VUE.showAdsense = false;
	    	sessionStorage.setItem('onceShowAdsense','onceShowAdsense'); //存储“关闭”操作，不再显示这个弹窗
	    },
	    getAdsenseList:function(_originId){
	    	var VUE = this;
			let adsense = {
				originId:_originId,
				pageNum:1,
				pageSize:10,
				token:""
			}
			VUE.$http(API.getIndexAdsenseList, adsense, data => {
				if(_originId == 51){ 
					VUE.adsenseTapList = data.data.list;//弹窗数据
				}else if(_originId == 52){ 
					VUE.banner(data.data.list); //首页banner图
				}else if(_originId == 53){				
//					console.log("广告~~"+JSON.stringify(data))
					VUE.adsenseScrollList = data.data.list;//附近的店下方广告数据
				}
			}, err => {
				this.$toast(err.msg);
			},{token:''})
	    },
	    toLink:function(val,num){
	   		var VUE = this;
	   		if(num == 1){
//	   			VUE.closeAdsense(); //关闭弹窗
	   		}
	   		if(val){
	   			window.location.href = val;
	   		}
	    },
	    stopScroll(){
	   	return false;
	    },
	    isLocationTip(){
			this.showLocationTip = false;
			sessionStorage.setItem('onceShowLocationTip','onceShowLocationTip');
	    },
	    getOpenCityList(code,name){
	    	var VUE = this;
			var cityList = {
			    token:'',
			    pageNum:1,
			    pageSize:0
			}
			VUE.$http(API.getOpenCityList, cityList, data => {
				VUE.openCityList = data.data.list;
				var hasOpen = false;
				VUE.openCityList.map(function(item){
					if(item.cityCode == code){
						hasOpen = true;
					}
				})
				if(!hasOpen){
					//显示未开放城市提示栏--只显示一次，除非关闭浏览器重开
					var openStatus = sessionStorage.getItem('onceShowLocationTip');
					if(openStatus == 'onceShowLocationTip'){
						VUE.showLocationTip = false;
					}else{
						VUE.showLocationTip = true;
					}
				}
			}, err => {
				VUE.$toast(err.msg);
			},{token: ""})
	    },
	    changeCity(type){ //切换城市按钮
	    	var VUE = this;
	   		VUE.showChangeCity=false;
	   		sessionStorage.setItem('onceShowCityChange','onceShowCityChange');
	   		if(type == 1){ //用户点击切换，则切换至当前定位城市
	   			window.localStorage.removeItem('GET_CURRENT_LOCATION');
	   			//初始化数据
				VUE.pageNum = 1;
				VUE.loadMore = false;
				VUE.noMore = false;
				VUE.loadText = '上拉加载...';
				VUE.storeList = [];
	   			VUE.getArea(1); //自动定位获取
	   		}
	    },
	    isSameCity(){ //展示切换城市控制方法
	    	var VUE = this;
	    	var showStatus = sessionStorage.getItem('onceShowCityChange');
	    	if(showStatus != 'onceShowCityChange'){
	    		VUE.showChangeCity = true;
	    	}
	    },
	    openUrl(val,_obj){
	    	var obj = _obj;
	    	if(val){
	    		utils.openUrl(val, _obj);
	    	}
	    },
	    openStoreUrl(_isCustomFurniture,_obj){
	    	var val = '';
	    	if(_isCustomFurniture){
	    		val = '../store/index.html';
	    	}else{
	    		val = '../store/store_index.html';
	    	}
	    	utils.openUrl(val, _obj);
	    },
	    getFinanceProduct(){ //获取金融产品列表
	    	var VUE = this;
			var req = {
				keywords:"",
			    pageNum: 1,
			    pageSize: 0,
			    status: 1,
			    channelId: 13
			}
			VUE.$http(API.getFinanceProduct, req, data => { 
				VUE.financeProduct = data.data.list;
				if(VUE.financeProduct.length>0){
					VUE.imgLogo = VUE.financeProduct[0].homeIcon;
			    	VUE.imgLink = VUE.financeProduct[0].spreadUrl;
				}
//			    console.log('列表---'+JSON.stringify(VUE.financeProduct))
			    setTimeout(function () {
					new Swiper('.swiper-container2', {
						speed: 450,
						pagination: {
							el: '.pagination2',
							bulletElement: 'li',
							currentClass: 'my-pagination-current2'
						},
						loop: false,
						preventLinksPropagation: false
					});
				}, 300)
			})
	    },
		getPreferenceList(){ //获取私家优选列表
			var VUE = this;
			var req = {
				cityCode:VUE.cityCode,
				cityId:VUE.cityId,
			    pageNum: 1,
			    pageSize: 3
			}
			VUE.$http(API.getPreferenceList, req, data => { 
				VUE.preferenceList = data.data.list;
			})
		},
		getCategoryList(){ //获取品类列表
 			var VUE = this;
			var req = {
			    pageNum: 1,
			    pageSize: 0,
			}
			VUE.$http(API.getCategoryList, req, data => { 
				VUE.categoryList = data.data.list;
				VUE.id = VUE.categoryList[0].categoryId;
				if(VUE.location){
					VUE.getArea(0); //获取定位
				}else{
					VUE.getArea(1); //获取定位
				}
//				console.log('品类列表---'+JSON.stringify(data.data.list));
			})
 		},
		changeActive:function(_idx,_brandId){ //首页切换品类展示店铺列表
			var VUE = this;
			VUE.tabIndex = _idx;
			var rr = $(VUE.$refs.nearStore).offset().top;
			if(VUE.headerBarFixed && VUE.storeList.length>0){
				document.getElementById('msg_end').scrollIntoView(); 
				document.getElementById('top').scrollIntoView(); 
			}
			VUE.$loading();
			//初始化数据
			VUE.id = _brandId;
			VUE.pageNum = 1;
			VUE.loadMore = false;
			VUE.noMore = false;
			VUE.loadText = '上拉加载...';
			VUE.storeList = [];
			VUE.getStoreList(VUE.id);
		},
		getStoreList: function(_id){
 			var VUE = this;
			var pageNum = VUE.pageNum +1;
			var store_req = {
				categoryId: _id || "",
				latitude:VUE.areaPoint.lat || 23.1194300000,
				longitude:VUE.areaPoint.lng || 113.3212200000,
				pageNum: VUE.pageNum,
				pageSize: 6
			}	
//			console.log('请求参数----'+JSON.stringify(store_req));
			VUE.$http(API.getStoreListByCategory, store_req, data => {
				if(data.code!=200 || data.data.list.length == 0){
//					VUE.loadText = '···我是一条底线···';
					VUE.noMore = true;
					VUE.loadMore = true;
					VUE.$loading(false);
					return;
				}else{
					VUE.$loading(false);
				}
				VUE.storeList = VUE.storeList.concat(data.data.list);
//				console.log('----'+JSON.stringify(VUE.storeList));
				VUE.minHeight = VUE.storeList.length*82;
				VUE.pageNum = pageNum;
				VUE.loadMore = false;
			}, err => {
				VUE.$loading(false);
				this.$toast(err.msg);
			})
 		}
	},
	
	created() {
		var VUE = this;
		//监听网络变化
		VUE.$nextTick(function(){
			//判断设备
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(isiOS){
				VUE.isiOS = true;
			}else{
				VUE.isiOS = false;
			}
			var location = VUE.location = window.localStorage.getItem('GET_CURRENT_LOCATION'); //拿到的定位信息
			if(location){
				location = JSON.parse(location);
//				console.log('缓存---'+JSON.stringify(location));
				VUE.areaMsg.lat = location.point.lat;
				VUE.areaMsg.lng = location.point.lng;
				VUE.areaMsg.cityName = location.address.city || '';
				VUE.areaMsg.cityCode = location.address.cityCode || '';
			}
			VUE.cityCodeData = cityCode; //cityCode列表数据
			//显示广告弹窗--只显示一次，除非关闭浏览器再重开
			var status = sessionStorage.getItem('onceShowAdsense');
			if(status == 'onceShowAdsense'){
				VUE.showAdsense = false;
			}else{
				VUE.showAdsense = true;
			}
			VUE.getAdsenseList(51); //获取广告弹窗列表
			VUE.getAdsenseList(52); // 首页banner图
			VUE.getAdsenseList(53); //获取附近的店下方广告位列表
			VUE.getFinanceProduct(); //获取金融产品列表
			VUE.getCategoryList(); //获取品类列表
			
			//监听滚动条开始
			this.box = this.$refs.viewBox; // 首先通过$refs获取dom元素
			this.box.addEventListener('scroll', (evt) => { // 监听scroll事件
				var top = 710; //没有提示条，有私家优选及广告列表
				//定位提示条部分
				if(VUE.showLocationTip){
			  		top = 762;
				}else{
			  		if(VUE.preferenceList.length == 0){ //私家优选列表
				  		top = 522;
				  		if(VUE.financeProduct.length == 1){
							top = 445;
						}else if(VUE.financeProduct.length == 0){
							top = 273;
						}
				  		if(VUE.adsenseScrollList.length == 0){
					  		top = 400;
					  		if(VUE.financeProduct.length == 1){
								top = 322;
							}else if(VUE.financeProduct.length == 0){
								top = 172;
							}
						}
					}else if(VUE.adsenseScrollList.length == 0){ //活动列表
				  		top = 592; 
				  		if(VUE.financeProduct.length == 1){
							top = 500;
						}else if(VUE.financeProduct.length == 0){
							top = 342;
						}
					}else {                                    //金融列表部分
						if(VUE.financeProduct.length == 1){
							top = 623;
						}else if(VUE.financeProduct.length == 0){
							top = 461;
						}
					}
			  	}
//				console.log(this.$refs.viewBox.scrollTop)
				if(this.$refs.viewBox.scrollTop>top){
			  		VUE.headerBarFixed = true;
				}else{
				VUE.headerBarFixed = false;
				}
				var windowHeight = this.$refs.viewBox.clientHeight || this.$refs.viewBox.clientHeight;
				var scrollHeight = this.$refs.viewBox.scrollHeight || this.$refs.viewBox.scrollHeight;
				if(this.$refs.viewBox.scrollTop + windowHeight == scrollHeight){
			  		if(VUE.loadMore) return;
		        	VUE.getStoreList(VUE.id);
			  	}
			}, false);
			//监听滚动条结束
		})
	},
	mounted: function() {
			
	},
	watch:{
	}
})