Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        icon:'../../image/my_collecte@2x.png',
        text:'我的收藏',
        url:'./subscribe/subscribe'
      },
  
      {
        icon:'../../image/my_about@2x.png',
        text:'关于漫画屋',
        url:''
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  move: function(event) {
    var action = event.currentTarget.dataset.action;
    var items = this.data.items; 
    var url;
    for (var i = 0; i < items.length; i++){
      if (items[i].text == action){
        url = items[i].url;
        break;
      } 
    }
    if (url){
      wx.navigateTo({
          url: url,
      })
    }
  }
})