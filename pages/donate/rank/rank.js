// pages/donate/rank/rank.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity:'',
    rankItem:[{
      avator:'',
      name:'维生数',
      completeNum:15,
      rank:'first'
    },{
      avator:'',
      name:'广工',
      completeNum:10,
      rank:'second'
    },{
      avator:'',
      name:'vtmer',
      completeNum:15,
      rank:'third'
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
    let id = app.globalData.identity
    console.log(id);
    this.setData({
      identity:id
    })
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
    
  }
})