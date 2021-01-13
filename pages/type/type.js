const util = require("../../util/util.js");

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
    this.getManhua();
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
  getManhua:function(){
    
    util.http(app.globalData.mhBase + "cms/news/list", this.manhuaHandler);
  },

  manhuaHandler: function(manhua){
    var manhuas = [];
    var data = manhua.data;
    console.log(data)

    for (var i = 0;i < manhua.data.length;i++) {
      var title = data[i].title;
      if (title.length >= 8){
        title = title.substring(0,8) + ".";
      }
      manhua.data[i].shortTitle = title
    }


    //处理tag
    var tags = this.tagHandler(data);

    console.log(tags)

    var type = this.typeHanler(data,tags);
    for (var i = 0; i< type.length; i++){
      while (type[i].data.length < 3){
        
          type[i].data.push({});
        
      }
      
    }
    console.log(type)

    
    this.setData({
      types:type
    })
  },

  //tag处理
  tagHandler: function(data){
    var tags = [];
    for (var i = 0;i < data.length;i++) {
      var tagTemp = data[i].tags.split("|");
      
      for (var j = 0;j < tagTemp.length; j++){
        var flag = true;
        for (var k =0; k< tags.length; k++){
          if (tagTemp[j] == tags[k] && flag){
            flag = false;
          }
        }
        if (flag) tags.push(tagTemp[j]);
      }
  
    }

    return tags;
  },

  //存放type
  typeHanler: function(data,tags){
    var type = [];
    for (var i = 0;i < tags.length;i++){
      var temp = [];
      for (var j = 0;j < data.length;j++){
        if (data[j].tags.indexOf(tags[i]) != -1
        && temp.length < 3){
          temp.push(data[j])
        }
      }

      type[i] = {type:tags[i],
                  data:temp}
    }
    return type;
  },

  onTapToDetail: function(event){
    if (event.currentTarget.dataset.bookId != undefined){
      wx.navigateTo({
        url: '../index/book-detail/book-detail?id=' + 
        event.currentTarget.dataset.bookId,
      })
    }
    
  },

  onMoreTap:function(event){
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more/more?category=' + category,
    })
  }
})