var fs = require("fs");
var http = require("http");
var url = require("url");
var path = require("path");
var root = path.resolve('./');
var server = http.createServer((req, resp) => {
    // resp.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(root, pathname);
    console.log(filepath);
    fs.stat(filepath, (err, res) => {
        // resp.writeHead(200,{
        //     'Access-Control-Allow-Headers':'Content-Type, api_key, Authorization',
        //     "Access-Control-Allow-Origin":"*"
        // });
        if (err) {
            resp.writeHead(404, {
                "Content-Type": "text/html;charset=utf8"
            })
            console.log("失败")
            resp.end("<h1>404 页面飞走了。。。</h1>", 'utf8')
        } else {
            resp.writeHead(200, {
                'Access-Control-Allow-Headers': 'Content-Type, api_key, Authorization',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": 'text/html;charset=utf8'
            });
            fs.createReadStream(filepath).pipe(resp);
            console.log("成功")
            // resp.end();
            // res.send("ABCD");
            // resp.send("ABCD");

        }
    });
});
server.listen(3002, "127.0.0.1");
console.log("Server Is Running: Port=3002");