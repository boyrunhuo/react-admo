import axios from 'axios';

import NProgress from 'nprogress';

import './index.css'

// 拦截请求
axios.interceptors.request.use(
  config => {
    NProgress.inc(0.2);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

//拦截响应
axios.interceptors.response.use(
  config => {
    NProgress.done();
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
