'use strict';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var get = require('./httpget1');
var post = require('./httppost1');
http.createServer(function(req,res){
if(req.method == "GET"){
    get.gethttp(req,res);
}
else if(req.method == "POST"){
    post.posthttp(req,res);
}else{
    res.end();
}

}).listen(5555,'127.0.0.1');

console.log('Sever 127.0.0.1 running');

