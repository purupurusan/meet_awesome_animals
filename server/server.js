import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpackConfig from '../webpack.config.dev.babel';
import webpackMiddleware from 'webpack-dev-middleware';
import HMR from 'webpack-hot-middleware';
import AWS from 'aws-sdk';

var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});

import App from '../src/App';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(HMR(compiler));
app.use(express.static(__dirname + '/public'));

function registerUser(params) {
  dynamodb.putItem(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
  });
}

//GETリクエストでルートにアクセスが会った時の動作
app.get('/', (req, res)=>{
  let index = fs.readFileSync('./public/index.html', 'utf-8');

  const appRendered = renderToString(
    <App />
  );
  index = index.replace('<%= preloadedApplication %>', appRendered);  res.send(index);
});

app.get('/register', (req, res)=>{
  let index = fs.readFileSync('./public/test.html', 'utf-8');
  var params = {
    TableName: 'users',
    Item: {
        'userid': {"S": "testhash2"},
        'password': {"S": "orange"},
        'mailaddress': {"S": "tetetest@gmail.com"},
        'address': {"S": "Tokyo"}
    }
  };

  registerUser(params);

  const appRendered = renderToString(
    <App />
  );
  index = index.replace('<%= preloadedApplication %>', appRendered);  res.send(index);
});

//3000番ポートを使ってサーバーを立ち上げ
app.listen(3000, ()=>{
});
