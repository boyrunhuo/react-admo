// import express from 'express';
// import Mock from 'mockjs';

let express = require('express'); //引入express
let Mock = require('mockjs'); //引入mock

let app = express(); //实例化express
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api/getHomeDate', function(req, res) {
  res.json(
    Mock.mock({
      status: 200,
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
    }),
  );
});

app.listen('4279', () => {
  console.log('开启Mock服务，监听端口4279');
});
