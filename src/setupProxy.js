//设置开发环境下的反向代理，解决跨域问题，setupProxy.js里设置可以配置多个不同的httpTarget，比在package.json中方便
const proxy = require('http-proxy-middleware');

var httpTarget = 'http://localhost:9002/';
// var httpTarget = 'http://10.17.64.44:9002/'; //某后端开发人员的本地地址

module.exports = function(app) {
  app.use(proxy('/api', { target: httpTarget }));
};
