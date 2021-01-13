var app = getApp();
var util = require('../../../util/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "我的收藏"
    })
    util.http(app.globalData.mhBase + "cms/news/list?isRecommend=true", this.manhuaHandler);
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

  manhuaHandler: function(manhua){
    var data = manhua.data;

    for (var i = 0;i < data.length;i++) {
      var title = data[i].title;
      if (title.length >= 8){
        title = title.substring(0,8) + ".";
      }
      data[i].shortTitle = title
    }
    this.setData({
      manhuas:data
    })
  },

  onTapToDetail: function(event){
    wx.navigateTo({
      url: '../../index/book-detail/book-detail?id=' + 
      event.currentTarget.dataset.bookId,
    })
  }
})