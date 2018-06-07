// pages/donate/home/home.js
const config = require('../config.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log('允许获取用户信息')
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res1) => {
              self.setData({
                userInfo: res1.userInfo
              })
            }
          })
        }
      }
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
  // 自定义函数
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toMe(e) {
    let id = e.currentTarget.dataset.id
    app.globalData.identity = id;
    wx.switchTab({
      url: "../me/info/info"
      // url:'../see/see'
    })
  },
  toRank() {
    wx.navigateTo({
      url: "../rank/rank"
    })
  },
  login(data) {
    let self = this
    let info = data.detail.userInfo
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: config.service.loginUrl,
            method: 'POST',
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: {
              code: res.code,
              nickname: info.nickName,
              avatar: info.avatarUrl
            },
            success: function (res2) {
              self.setData({
                userInfo: info,
                hasUserInfo: true
              })
              app.globalData.userInfo = info
              if (res2.data.status_code == 200) {
                wx.setStorageSync('token', res2.data.data.token)
                wx.setStorageSync('openid', res2.data.data.openid)
                wx.setStorageSync('uid', res2.data.data.uid)
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });

  }
})