function http(url,callBack){
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-type":"json"
    },
    success:function(res){
      callBack(res.data)
    },
    fail:function(erroe){
      console.log(url)
      console.log("error:*******************")
      console.log(error)
    }
  })
}

module.exports = {
  http:http
}