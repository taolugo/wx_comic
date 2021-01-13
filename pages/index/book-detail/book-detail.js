const util = require("../../../util/util.js");

var app = getApp();
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
    var id = options.id;
    var url = app.globalData.mhBase + "cms/news/detail?token=" + app.globalData.token
     + "&id=" + id
    console.log(url)
    util.http(url, this.manhuaHandler);
    
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
    console.log(manhua)
    // var data = manhua.data;

      // if (title.length >= 14){
      //   title = title.substring(0,14) + ".";
      // }
      if ( manhua.data.author.length >= 10){
        manhua.data.author = manhua.data.author.substring(0,10) + "..";
      }
      var content = manhua.data.content.replace(/<p>/,"");
      content = content.replace(/<\/p>/,"");

      content = content.replace(/&middot;/,"·");
      content = content.replace(/&middot;/,"·");
      manhua.data.content = content
      this.setData({
        manhua:manhua.data
      })

  }
})