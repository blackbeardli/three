'use strict';
var fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
var rootDirictory=path.resolve('./'||process.argv[2]);
console.log("Static root directory:"+rootDirictory);
var server=http.createServer(function(request,response){
    var pathname=url.parse(request.url).p8athname;
    var filepath=path.join(rootDirictory,pathname);
    fs.stat(filepath,function(err,stats){
        if (err|| !stats.isFile) {
            console.log("404"+request.url);//发送404错误码
            response.writeHead(404);
            response.end('404 页面被外星人带走啦 *_*\'');
        } else {
            console.log("200"+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }
    });
});
server.listen(8080);
console.log("Server is Running at http://127.0.0.1:8080/");