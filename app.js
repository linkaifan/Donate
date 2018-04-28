//app.js
const config = require('./pages/donate/config')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    let self = this
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.getUserInfo({
            success: (res1) => {             
              wx.request({              
                //拿token
                url: config.service.loginUrl,
                method: 'GET',
                /* 如果是post传key-value的话需要加头请求
                header: {
                  "content-type": "application/x-www-form-urlencoded"
                }, */
                data: {
                  code: res.code,
                  nickname: res1.userInfo.nickName,
                  avatar: res1.userInfo.avatarUrl
                },
                success: (res2) => {                                   
                  self.globalData.userInfo = res1.userInfo
                  if (res2.data.status_code == 200) {
                    wx.setStorageSync('token', res2.data.data.token)
                    wx.setStorageSync('openid', res2.data.data.openid)
                  }
                },
                fail: (res) => {
                  console.log(res)
                },
                complete: (res3) => {
                  console.log(res3)
                }
              })
            },
            fail: () => {
              wx.showModal({
                title: '提示',
                content: '请重新授权',
                showCancel: false
              })
            }
          })

        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    // 判断是企业[enterprise]还是社团[group]
    identity:'',
  }
})