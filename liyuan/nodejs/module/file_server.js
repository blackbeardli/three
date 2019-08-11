'use strict';
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
//从命令行参数获取root目录,默认是当前目录
    var root = path.resolve(process.argv[2] || '.');
    console.log(root);
//创建服务器
       var server = http.createServer(function(request,response){
    //获取url的path
        var pathname = url.parse(request.url).pathname;
           //console.log(request.url);//  /
          // console.log(url.parse(request.url));
        //console.log(url.parse);
        //获得对应的本地文件路径
          var filepath =  path.join(root,pathname);
          console.log("filepath:"+filepath);
          //获取文件的信息
    fs.stat(filepath,function(err,stats){
        //如果没有出错并且文件存在
        if(!err && stats.isFile()){
            console.log('200'+request.url);
            //发送200响应
            response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错了或者文件不存在
            console.log('404'+request.url);
            //发送404响应
            response.writeHead(404);
            response.end('404 NOt Found');
        }
        });
    });

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080');