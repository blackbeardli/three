'use strick';
var fs  = require('fs');
var ws = fs.createWriteStream('sa.txt','utf-8');
ws.write('qweqweqw');
ws.write('end');
ws.end();
//
