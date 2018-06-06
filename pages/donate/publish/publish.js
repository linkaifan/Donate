// pages/donate/publish/publish.js
const app = getApp()
const config = require('../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity:'',
    userInfo:{},
    enterpriseInfo:{
      school:'',
      brand:'',
      name:'',//联系人
      place:['广东省','广州市','番禺市'],
      phone:'',
      qq:'',
      wechat:'',
      end:'2020-09-01',
      content:'',
      begin:'2017-09-01',
      token:'' ,
    },
    groupInfo:{
      school:'',
      group:'',
      name:'',//联系人
      place:['广东省','广州市','番禺市'],
      phone:'',
      qq:'',
      wechat:'',
      end:'2020-09-01',
      content:'',
      begin:'2017-09-01',
      token:'',
      category:''
    },
    PublishInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.setData({
      userInfo: app.globalData.userInfo,
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
    if (app.globalData.identity) {
      this.setData({
        identity:app.globalData.identity
      })
      if (this.data.identity == 'en') {
        this.setData({
          PublishInfo:this.data.enterpriseInfo
        })        
      }else if (this.data.identity == 'group') {
        this.setData({
          PublishInfo:this.data.groupInfo
        })         
      }
    }
    console.log(this.data.identity);  
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
    let key = `PublishInfo.${e.target.dataset.cls}`   
    this.setData({
      [key]: e.detail.value
    })
  },
  bindAddressChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['PublishInfo.place']: e.detail.value,
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['PublishInfo.end']: e.detail.value
    })
  },
  //提交
  submit(){
    let self = this 
    this.setData({
      ['PublishInfo.token'] : wx.getStorageSync('token') 
    })   
    if (this.data.identity == 'group') {
      this.postData(config.service.groupPost)
    } else if (this.data.identity == 'en') {
      this.postData(config.service.enPost)
    }            
  },
  postData(url){
    wx.request({
      url: url,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:this.data.PublishInfo,
      success: function (res) {
        console.log(res);
        if (res.statusCode === 200) {
          wx.showModal({
            title: '提示',
            content: '发布成功！',
            showCancel: false,
            success: function(res) {
              wx.navigateTo({
                url: '../me/info/info'
              })
            }
          })
        }
      },
      fail: function(err) {
        console.log(err);        
      }
    })
  }
})