//app.js
const config = require('./pages/donate/config')
App({
  onLaunch: function () {
    let self = this
    // 获取用户信息
     wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // 登录
          wx.login({
            success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              if (res.code) {
                wx.getUserInfo({
                  success: (res1) => {   
                    console.log('app.login');                                      
                    self.globalData.userInfo = res1.userInfo                      
                    wx.request({              
                      //拿token
                      url: config.service.loginUrl,
                      method: 'POST',
                      header: {
                        "content-type": "application/x-www-form-urlencoded"
                      },
                      data: {
                        code: res.code,
                        nickname: res1.userInfo.nickName,
                        avatar: res1.userInfo.avatarUrl
                      },
                      success: (res2) => {                                                          
                        if (res2.data.status_code == 200) {
                          wx.setStorageSync('token', res2.data.data.token)
                          wx.setStorageSync('openid', res2.data.data.openid)
                          wx.setStorageSync('uid', res2.data.data.uid)
                        }
                      },
                      fail: (res) => {
                        console.log(res)
                      },
                      complete: (res3) => {
                        // console.log(res3)
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