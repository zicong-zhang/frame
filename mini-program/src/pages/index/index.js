const app = getApp();

Page({
  data: {
    msg: '架子22'
  },
  onLoad() {
    this.getData()
  },
  async getData() {
    const serviceInfo = await app.request('sstoreList', {
      par: 'xxx'
    })
    console.log('serviceInfo:_____', serviceInfo);
  }
})
