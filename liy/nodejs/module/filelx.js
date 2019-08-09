'use stickt';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var get = require('httpGet');
http.createServer(function (req, res) {
    if (req.method == 'GET'){
        doGet(req,res);
    }else if(req.method == 'POST'){
        doPost(req,res);
    }else {
        res.end();
    }
}).listen(1337, '127.0.0.1');


function doPost(req,res){
    //不建议使用req。on
    //建议使用空字符串方法
    var formdate='';
    req.on('data',function(data){
       formdate+=data;
    });
    req.on('end',function(){
        var obj = querystring.parse(formdate);
        console.log(obj);
        res.end();
    });


}
console.log('Server running at http://127.0.0.1:1337/');
