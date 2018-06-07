/**
 * 小程序配置文件
 */

// 此处主机域名
var host = 'https://www.nancelglap.cn';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
        
        loginUrl: `${host}/user/login`,     // 登录地址
        getRank: `${host}/user/getRank`,       
        getInfo: `${host}/user/getInfo`,    //获取个人信息
        posting: `${host}/reqs/posting`,
        ongoing: `${host}/reqs/ongoing`,
        done: `${host}/reqs/done`,
        groupPost:`${host}/reqs/groupPost`,
        enPost:`${host}/reqs/enPost`,
        like:`${host}/user/req/like`,
        dislike:`${host}/user/req/dislike`,
        EnAllReqs:`${host}/reqs/en/allReqs`,
        GroupAllReqs:`${host}/reqs/group/allReqs`,
        search:`${host}/reqs/search`,
        sendInvitation:`${host}/reqs/sendInvitation`,
        inviteList:`${host}/reqs/inviteList`,
        choice:`${host}/reqs/choice`,
        end:`${host}/reqs/end`,
    }
};

module.exports = config;
