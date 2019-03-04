const faker = require('faker')

const Index = {
  errorcode: 0,
  errmsg: '',
  data: getMarkrtsData()
}

function getMarkrtsData () {
  let Markrts = []
  for (var i = 0; i < 10; i++) {
    if (i === 2) {
      Markrts.push({
        latitude: (23.099994 + i * 0.08).toFixed(6), // 门店纬度
        longitude: (113.324520 + i * 0.08).toFixed(6), // 门店经度
        storeInfo: { // 门店卡片信息
          store_id: i, // 门店ID
          // store_img: faker.random.image(), //  门店头图
          store_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535084958494&di=fd969add801f91eb1feed8a169698fed&imgtype=0&src=http%3A%2F%2Fnew-img1.ol-img.com%2F121%2F145%2FliR4u1ClAvRaU.jpg', //  门店头图
          store_title: faker.company.companyName(), //  门店名称
          store_address: faker.address.streetAddress() + faker.address.city() + faker.address.country(), //  门店地址
          store_distance: faker.random.number() //  门店距离
        },
        //  如果没有提交服务id，则返回serviceInfo: ""
        serviceInfo: {
          service_title: `洗车${i}`, // 服务标题
          service_price: faker.random.number(), // 服务价格
          service_cheap: 1, // 服务是否最便宜（1为最便宜，0则不是）
          service_range: 0 // 服务是否距离最近（1为最便宜，0则不是）
        }
        // serviceInfo: ''
      })
    } else if (i === 4) {
      Markrts.push({
        latitude: (23.099994 + i * 0.08).toFixed(6), // 门店纬度
        longitude: (113.324520 + i * 0.08).toFixed(6), // 门店经度
        storeInfo: { // 门店卡片信息
          store_id: i, // 门店ID
          // store_img: faker.random.image(), //  门店头图
          store_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535084958494&di=fd969add801f91eb1feed8a169698fed&imgtype=0&src=http%3A%2F%2Fnew-img1.ol-img.com%2F121%2F145%2FliR4u1ClAvRaU.jpg', //  门店头图
          store_title: faker.company.companyName(), //  门店名称
          store_address: faker.address.streetAddress() + faker.address.city() + faker.address.country(), //  门店地址
          store_distance: faker.random.number() //  门店距离
        },
        //  如果没有提交服务id，则返回serviceInfo: ""
        serviceInfo: {
          service_title: `洗车${i}`, // 服务标题
          service_price: faker.random.number(), // 服务价格
          service_cheap: 0, // 服务是否最便宜（1为最便宜，0则不是）
          service_range: 1 // 服务是否距离最近（1为最便宜，0则不是）
        }
        // serviceInfo: ''
      })
    } else {
      Markrts.push({
        latitude: (23.099994 + i * 0.08).toFixed(6), // 门店纬度
        longitude: (113.324520 + i * 0.08).toFixed(6), // 门店经度
        storeInfo: { // 门店卡片信息
          store_id: i, // 门店ID
          // store_img: faker.random.image(), //  门店头图
          store_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535084958494&di=fd969add801f91eb1feed8a169698fed&imgtype=0&src=http%3A%2F%2Fnew-img1.ol-img.com%2F121%2F145%2FliR4u1ClAvRaU.jpg', //  门店头图
          store_title: faker.company.companyName(), //  门店名称
          store_address: faker.address.streetAddress() + faker.address.city() + faker.address.country(), //  门店地址
          store_distance: faker.random.number() //  门店距离
        },
        //  如果没有提交服务id，则返回serviceInfo: ""
        serviceInfo: {
          service_title: `洗车${i}`, // 服务标题
          service_price: faker.random.number(), // 服务价格
          service_cheap: 0, // 服务是否最便宜（1为最便宜，0则不是）
          service_range: 0 // 服务是否距离最近（1为最便宜，0则不是）
        }
        // serviceInfo: ''
      })
    }
  }
  return Markrts
}

module.exports = Index
