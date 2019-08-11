'use strict';
var path=require('path'),
    http=require('http'),
    url=require('url'),
    fs=require('fs');
var root=path.resolve("./"||process.argv[2])

console.log(root);//根目录；
console.log("根目录就是"+root);

var server=http.createServer((req,resp)=>{
    var pathname=url.parse(req.url).pathname;
    var filepath=path.join(root,pathname);
    fs.stat(filepath,(err,res)=>{
        if (err) {
            console.log("404"+req.url);
            resp.writeHead(404,{"Content-Type":'text/html;charset=utf8'});
            resp.end("<h1>404 页面飞走了。。。</h1>",'utf8');
        }else{
            // console.log(res)
            // console.log(typeof(res))
            console.log(filepath)
            console.log(typeof(filepath))



            if (filepath.slice(-4,)==".jpg") {
                console.log("输出图片");
                resp.writeHead(200);
                fs.createReadStream(filepath).pipe(resp);
            } else {
                console.log(200+req.url);
                console.log("输出文本文档")
                resp.writeHead(200,{"Content-Type":'text/html;charset=utf8'});
                fs.createReadStream(filepath).pipe(resp);
            }
 
        }
    });
});
server.listen(3001);
console.log("Server Is Running: Port=3001");
