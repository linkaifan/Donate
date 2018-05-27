// pages/donate/see/see.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:'',
    items:[{
      enterpriseName:'网易云音乐',
      brand:'',      
      contact:'',
      address:'广东省广州市', 
      phone:'12345657',   
      qq:'',
      email:'',
      time:'2018-2-16',    
      content:'社团你们好，我是你们的赞助爸爸。'  ,
      avator:'../../../../assets/icon/me/test2.png' ,
      money:25
    },{
      enterpriseName:'哔哩哔哩有限公司',
      brand:'',      
      contact:'',
      address:'广东省广州市', 
      phone:'12345657',   
      qq:'',
      email:'',
      time:'2018-2-16',    
      content:'社团你们好，我是你们的赞助爸爸。'  ,
      avator:'../../../../assets/icon/me/test2.png' ,
      money:25
    }]
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
  //自定义函数
  bindKeyInput: function(e) {       
    this.setData({
      search: e.detail.value
    })
  },
})