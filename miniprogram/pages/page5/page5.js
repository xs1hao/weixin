Page({
  data: {
    addressInfo: null,
    locationInfo: null
  },
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          addressInfo: res
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  getLocation() {
    wx.getLocation({
      success: (res) => {
        this.setData({
          locationInfo: res
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})