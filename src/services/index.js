import axios from 'axios';

import NProgress from 'nprogress';

// 拦截请求
axios.interceptors.request.use(
  config => {
    NProgress.inc(0.2);
    console.log('request go');
    return config;
  },
  err => {
    console.log('请求失败');
    return Promise.reject(err);
  },
);

//拦截响应
axios.interceptors.response.use(
  config => {
    NProgress.done();
    console.log('response get');
    return config;
  },
  err => {
    console.log('响应失败');
    return Promise.reject(err);
  },
);
