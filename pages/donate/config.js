/**
 * 小程序配置文件
 */

// 此处主机域名
var host = 'https://www.nancelglap.cn';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
        // 登录地址
        loginUrl: `${host}/user/login`,

    }
};

module.exports = config;
