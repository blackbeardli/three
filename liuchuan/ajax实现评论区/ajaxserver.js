'use strict';
var url = require('url');
var path = require('path');
var http = require("http");
var net = require('net');
var fs = require("fs");
var root = path.resolve("./" || ProcessingInstruction.argv[2]);
console.log(root); //根目录
// var time=new Date();
// console.log( time.toLocaleString());
// console.log(typeof(time));
// console.log(time);
var server = http.createServer(function (req, resp) {
    var time = new Date();
    var timestr = time.toLocaleString();
    var timestr_html = "<p class='time card-header'>" + timestr + "</p>";
    var cc = url.parse(req.url).query;
    // console.log(query);
    // console.log( escape(query));
    // console.log( unescape(query));
    var query = decodeURI(cc);

    var query_html = "<p class='query card-body text-primary'>" + query + "</p>";
    var result = "<div class='card border-primary mb-3'>" + timestr_html + query_html + "</div>"
    //拿到query后,先构造一个
    //code
    fs.writeFile("test.html", result, {
        'flag': 'a'
    }, function (err) {
        if (err) {
            throw err;
        }
        console.log("写入本地成功");
        resp.writeHead(200, {
            'Access-Control-Allow-Headers': 'Content-Type, api_key, Authorization',
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'text/html;charset=utf8'
        });
        resp.end();
    })

});
server.listen(3001, "127.0.0.1");
console.log("Server Is Running: Port=3001");