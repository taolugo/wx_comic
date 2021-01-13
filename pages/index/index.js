const util = require("../../util/util");

var data = require("../../data/data.js").data;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manhuas:[],
    count:1,
    loadAllow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    this.getManhua();
    this.setData({
      imgList: this.getAllBanner(),
      recommends: data.recommend,
    });
    

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
    this.data.count++;
    var page = parseInt(this.data.manhuas.length / 5) + 1 ;
    
    setTimeout(()=>{
      if (this.data.count <= page){
        var nextUrl = app.globalData.mhBase + 
        "cms/news/list?pageSize=5&page=" + page;
    
        util.http(nextUrl,this.manhuaHandler);
      }else{
        this.setData({
          loadAllow:false
        })
      }
    },800)
    

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onTapToDetail: function(event){
    wx.navigateTo({
      url: 'book-detail/book-detail?id=' + 
      event.currentTarget.dataset.bookId,
    })
  },

  getAllBanner: function(){
    var imgData = wx.getStorageSync('imgList')
    if (!imgData){
      var imgData = data.imgList
      wx.clearStorageSync()
      wx.setStorage({
        data: imgData,
        key: 'imgList',
      })
    }
    
    return imgData;
  },


  getManhua:function(){
    
    util.http(app.globalData.mhBase + "cms/news/list?page=1&pageSize=5", this.manhuaHandler);
  },

  manhuaHandler: function(manhua){
    data = manhua.data;
    
    for (var i = 0;i < manhua.data.length;i++) {
      var title = data[i].title;
      var author = data[i].author;
      if (title.length >= 14){
        title = title.substring(0,14) + ".";
      }
      if (author.length >= 10){
        author = author.substring(0,10) + ".";
      }
      var temp = {
        author:author,
        title:title,
        dateAdd:data[i].dateAdd,
        tags:data[i].tags,
        descript:data[i].descript,
        id:data[i].id
      }
      this.data.manhuas.push(temp);
    }
    this.setData({
      manhuas:this.data.manhuas
    })
  }
})