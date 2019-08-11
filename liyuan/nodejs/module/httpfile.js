//第一个搭建的http服务器
'use strict';
//导入http模块
var http = require('http');
//创建http server，并传入回调函数
var server = http.createServer
(function (request, response){
    //回调函数接收request和response对象
    //获得http方法和url
    console.log(request.method+':'+request.url);
    //讲http响应的200写入response，
    // 同时设置content-type：text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>helo</h1>');
    });
//让服务器监听8080端口
server.listen(8080);
console.log('Sever is running at http://127.0.0.1:8080/');