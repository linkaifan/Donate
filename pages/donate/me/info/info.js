const app = getApp()
const config = require('../../config.js')
// pages/donate/me/info/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    DetailPlace:'40rpx auto 0 auto',
    token:'',
    userInfo:{},
    uid:'',
    //显示哪个板块
    curIndex:1,
    // 判断是否点击查看具体项目
    isShowDesInfo:false,
    des:{},
    ongoings:null,
    postings:null,
    dones:null,
    invites:null,
    //要邀请的用户uid
    inviteUid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('info.onload');   
    this.setData({    
      userInfo: app.globalData.userInfo,
      token: wx.getStorageSync('token'),
      uid:wx.getStorageSync('uid')
    }) 
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
    //获取正在进行数据,存在ongings里，再根据type分出en和stu
    this.getData(config.service.ongoing,'ongoings')
    //获取已发布数据,存在postings里
    this.getData(config.service.posting,'postings')
    //获取正在进行数据,存在dones里
    this.getData(config.service.done,'dones')  
    //获取受邀请数据,存在invites里
    this.getData(config.service.inviteList,'invites')  
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
  //页面滚动触发事件的处理函数
  onPageScroll(e){
    this.setData({
      scrollTop:e.scrollTop,
    })   
  },
  // 自定义函数
  bindKeyInput: function(e) {       
    this.setData({
      inviteUid: e.detail.value
    })
  },
  /*获取正在进行，已完成，已发布。
  url：ongoing/posting/done[config], objStr:ongings/postings/dones*/
  getData(url,objStr){
    let self = this   
    wx.request({
      url: url,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        token:this.data.token
      },
      success: function (res) {
        self.setData({
          [objStr]:res.data.data
        })
      },
      fail: function(err) {
        console.log(err);        
      }
    })
  },
  //nav，点击切换相应内容，判断是否需要获取相应数据
  changeCurIndex(e){  
    let i = e.currentTarget.dataset.i
    this.setData({
      curIndex:i
    })          
  },
  ShowDesInfo(e){      
    let index = e.currentTarget.dataset.info
    let key = e.currentTarget.dataset.cls
    let value = this.data[key][index]    
    this.setData({
      isShowDesInfo:true,
      des:value,
      DetailPlace:`${20+this.data.scrollTop}px auto 0 auto`,
    })
  },
  closeDesInfo(){
    this.setData({
      isShowDesInfo:false
    })
  },
  // sendInvitation(){
  //   let self = this   
  //   wx.request({
  //     url: config.service.sendInvitation,
  //     method: 'POST',
  //     header: {
  //       "content-type": "application/x-www-form-urlencoded"
  //     },
  //     data:{
  //       token:this.data.token,
  //       type:this.data.des.type,
  //       req_id:
  //       uid:this.data.inviteUid
  //     },
  //     success: function (res) {
  //     },
  //     fail: function(err) {
  //       console.log(err);        
  //     }
  //   })    
  // }
})