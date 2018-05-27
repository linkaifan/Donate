const app = getApp()
const config = require('../../config.js')
// pages/donate/me/info/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    userInfo:{},
    //显示哪个板块
    curIndex:1,
    // 判断是否点击查看具体项目
    isShowDesInfo:false,
    des:{},
    //完成
    completeItems:{
      items:[{
        group:{
          time:"2018-2-16",
          title:"寻求营销大赛赞助",
          content:"大家好我是你们的爸爸。",
          school:'广东工业大学',
          groupName:'维生数工作室',
          address:'广东省广州市',
          phone:'131433777',
          avator:'../../../../assets/icon/me/test1.png',
          money:25
        },
        enterprise:{
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
        }
      }],
    },
    //发布
    publish:{
      items:[{
        time:"2018-2-16",
        title:"寻求营销大赛赞助",
        content:"大家好我是你们的爸爸。",
        school:'广东工业大学',
        group:'维生数工作室',
        address:'广东省广州市',
        phone:'131433777'
      },{
        time:"2018-2-17",
        title:"寻求yinxiao大赛赞助",
        content:"大家好我是你们的爸爸",
        school:'广东工业大学',
        group:'维生数工作室',
        address:'广东省广州市',
        phone:'131433777'
      },{
        time:"2018-2-18",
        title:"寻求yinxiaoling大赛赞助",
        content:"大家好我是你们的爸爸",
        school:'广东工业大学',
        group:'维生数工作室',
        address:'广东省广州市',
        phone:'131433777'
      }],
    },
    //进行中
    doing:{
      items:[{
        group:{
          time:"2018-2-16",
          title:"寻求营销大赛赞助",
          content:"大家好我是你们的爸爸。",
          school:'广东工业大学',
          groupName:'维生数工作室',
          address:'广东省广州市',
          phone:'131433777',
          avator:'../../../../assets/icon/me/test1.png',
          money:25
        },
        enterprise:{
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
        }
      }]
    },
    ongoings:null,
    postings:null,
    dones:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    console.log('info.onload');
    
    this.setData({    
      userInfo: app.globalData.userInfo,
      token : wx.getStorageSync('token') 
    }) 
    //获取正在进行数据,存在ongings里，再根据type分出en和stu
    this.getData(config.service.ongoing,'ongoings')
    //获取已发布数据,存在postings里
    this.getData(config.service.posting,'postings')
    //获取正在进行数据,存在dones里
    // this.getData(config.service.done,'dones')
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
      isSelect:false,
      curIndex:i
    })          
  },
  ShowDesInfo(e){
    let index = e.currentTarget.dataset.info
    this.setData({
      isShowDesInfo:true,
      des:this.data.publish.items[index]
    })
  },
  closeDesInfo(){
    this.setData({
      isShowDesInfo:false
    })
  },

})