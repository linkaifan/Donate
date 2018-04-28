## 首页home
Q1:确定完身份后能更改吗？我暂时定为重开小程序才能改
## 发布页[publish]
```
//企业
PublishInfo:{
    enterprise:'',//企业
    brand:'',       //品牌
    contact:'',//联系人
    address:'', //地址
    phone:'',   
    qq:'',
    email:'',
    time:'',    //时间范围
    content:''   //赞助内容  
},
//社团
PublishInfo:{
    school:'',
    group:'',
    contact:'',
    address:'',
    phone:'',
    qq:'',
    email:'',
    time:'',
    content:''   //赞助需求  
},
```
{

}
## 排行页rank
Q2：社团的排行榜跟企业的显示相同吗？我暂时定位都一样
```
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
```
## 个人中心[me+info]
Q3:已完成跟正在进行如果有多个，如何排版，一页显示几个，分页如何定？
- 已发布:
```
//社团发布，是个数组来着
items:[{
    time:"2018-2-16",
    title:"寻求营销大赛赞助",
    content:"大家好我是你们的爸爸。",
    school:'广东工业大学',
    group:'维生数工作室',
    address:'广东省广州市',
    phone:'131433777'
    <!-- 里面Key跟上面社团发布页面基本一致 -->
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
    }
],
//企业发布，是个数组来着
items:[{
    time:"2018-2-16",
    title:"寻求营销大赛赞助",
    content:"大家好我是你们的爸爸。",
    school:'广东工业大学',
    group:'维生数工作室',
    address:'广东省广州市',
    phone:'131433777'
    <!-- 里面Key跟上面社团发布页面基本一致 -->
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
    }
],
```
- 正在进行

    比发布多个每个item的积分值，
    以及完成与否【初始是未完成，一方点击变成确认中[具体哪一方点了]，两方点击变成已完成】
- 已完成

    比发布多个每个item的积分值，合作双方的信息，完成的时间