// pages/donate/see/see.js
const config = require('../config.js')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    userInfo:{},
    identity:'',
    //与身份对应反，如果身份是en，则contrary为group。
    contrary:'',
    search:'',
    items:[],
    //用来区分是拿全部还是search接口，一开始是拿全部
    isSearch:false,
/*  brands:["快乐","风男","托儿索","honor","vivo","coco","xiaomi"],
    category:["科技类","创新创业","舞蹈类","晚会类","艺术节类","体育类"],
    district:["广州","汕头","惠州","珠海","东莞","清远","佛山"], 
    nav:null,*/
    isShowNav:false,
    loading:false,
    isAll:false,
    place:['广东省','广州市','番禺市'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    console.log('see.onload');   
    this.setData({    
      userInfo: app.globalData.userInfo,
      token : wx.getStorageSync('token') 
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
        //如果是企业，就让用户看到社团的信息
        this.getData(config.service.GroupAllReqs,null)
        this.setData({
          contrary:'group'
        })
/*         this.setData({
          nav:this.data.category
        }) */
      }else if (this.data.identity == 'group') {
        this.getData(config.service.EnAllReqs,null)
        this.setData({
          contrary:'en'
        })
/*         this.setData({
          nav:this.data.brands
        })  */       
      }
    }  
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
    console.log('加载更多');
    let lastIndex = this.data.items.length - 1
    let flag = this.data.items[lastIndex].created_at
    if (this.isSearch) {
      this.search(flag,this.data.contrary)
    }
    else{
      if (this.data.identity == 'en') {
        this.getData(config.service.GroupAllReqs,flag)
      }else if (this.data.identity == 'group') {
        this.getData(config.service.EnAllReqs,flag)     
      }  
    }
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
  /*获取企业发布，社团发布信息
  url：EnAllReqs/GroupAllReqs,flag：最后一条的created_at字段【分页】*/
  getData(url,flag){
    this.setData({
      loading: true
    })
    let self = this   
    wx.request({
      url: url,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        token:this.data.token,
        flag:flag
      },
      success: function (res) {
        let data = res.data.data  
        if (!data.length) {          
          console.log('加载完成');  
          self.setData({
            isAll:true,
            loading: false
          })        
        }else{
          self.data.items.push(...data)
          self.setData({
            items:self.data.items,
            loading: false
          })
        }
      },
      fail: function(err) {
        console.log(err);        
      }
    })
  },
  Liketoggle(e){
    let self = this
    let index = e.currentTarget.dataset.index
    let id = this.data.items[index].id
    let isLike =  this.data.items[index].is_liked
    let url = isLike?config.service.dislike:config.service.like
    
    let type = this.data.items[index].type 
    this.data.items[index].is_liked = !isLike
    if (isLike) {
      this.data.items[index].liked_counts--
    }else{
      this.data.items[index].liked_counts++
    }
    this.data.items[index].liked_counts = 
    this.setData({
      items:this.data.items
    })
    wx.request({
      url,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        token:this.data.token,
        id,
        type
      },
      success: function (res) {
        let data = res.data
        console.log(data);                 
      },
      fail: function(err) {
        console.log(err);        
      }
    })
  },
  //三联动地区选择
  bindAddressChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      place: e.detail.value,
    })
  },
  //点击搜索icon,参数token type province city district name[搜索框内容] flag,
  search(flag,type){
    this.setData({
      loading: true
    })
    let self = this   
    wx.request({
      url: config.service.search,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data:{
        token:this.data.token,
        type:'en',
        name:this.data.search,
        province:this.data.place[0],
        city :this.data.place[1],
        district :this.data.place[2],      
        flag:undefined
      },
      success: function (res) {
        let data = res.data.data   
        console.log(data);        
        if (!data.length) {          
          console.log('加载完成');  
          self.setData({
            isAll:true,
            loading: false,
            search:''
          })        
        }else{
          self.data.items.push(...data)
          self.setData({
            items:self.data.items,
            loading: false,
            search:''
          })
        }
        
      },
      fail: function(err) {
        console.log(err);        
      }
    })
  },
  //点击搜索icon
  searchBtn(){
    this.setData({
      isSearch:true,
      items:[]
    })
    this.search(null,this.data.contrary)
  } 
})