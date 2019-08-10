'use strict';
var fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
var rootdiractory=path.resolve(process.argv[2] || '.');
console.log("Static root dir:"+rootdiractory);
var server=http.createServer(function(request,response){
    var pathname=url.parse(request.url).pathname;
    var filepath=path.join(root,pathname);
})