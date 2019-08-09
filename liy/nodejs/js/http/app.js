'use stickt';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var get = require('./httpGet');
var post = require('./httpPost');
http.createServer(function (req, res) {
    if (req.method == 'GET'){
        get.doGet(req,res);
    }else if(req.method == 'POST'){
        post.doPosts(req,res);
    }else {
        res.end();
    }
}).listen(1337, '127.0.0.1');



console.log('Server running at http://127.0.0.1:1337/');
