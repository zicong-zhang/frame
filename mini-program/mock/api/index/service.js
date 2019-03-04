const faker = require('faker')

const serviceProduct = {
  errorcode: 0,
  errmsg: '',
  data: getServiceProductData()
}

function getServiceProductData () {
  let ServiceData = []
  for (var i = 0; i < 3; i++) {
    ServiceData.push({
      service_id: i + 1, // 服务id
      service_title: faker.random.word() // 服务标题
    })
  }
  return ServiceData
}

module.exports = serviceProduct
