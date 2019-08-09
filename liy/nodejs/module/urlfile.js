'use strict';
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

//从命令行参数获取root目录,默认是当前目录
    var root =  path.resolve(process.agv[2] || '.');
//创建服务器
       var server = http.createServer()