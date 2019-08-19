'use strict';
var url = require('url');
var fs = require('fs');
var http = require('http');
var path = require('path');
//从命令行参数获取root目录，默认是当前目录
   var root = path.resolve(process.argv[2] || '.');
   //创建服务器
    var server = http.createServer(function(req,res){
    //获取url的path
        var pathname = url.parse(req.url).pathname;
       //获取对应的本地文件路劲
    var filepath = path.join(root,pathname);
    //写入文件数据
     req.on('data',function(data){
         console.log("服务器接收到的数据为:"+decodeURIComponent(data));
     });
      req.on('end',function(){
          console.log("客户端请求的数据完毕");
      });
    //获取文件状态
        fs.stat(filepath,function(err,stats){
           if(!err && stats.isFile()){
               res.writeHead(200);
               fs.createReadStream(filepath).pipe(res);
           } else{
               res.writeHead(404);
               res.end('404 not fout')
           }
        });
});
server.listen(8080);
console.log("server is running at http://127.0.0.1");