// pages/donate/me/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //显示哪个板块
    curIndex:-1,
    // 判断是否点击查看具体项目
    isShowDesInfo:false,
    des:{},
    //完成
    completeItems:{
      items:[],
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
      group:{

      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({    
      curIndex: options.i    
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
  }
})