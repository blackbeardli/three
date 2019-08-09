//从文件中读取文本内容
'use strict'
var fs = require('fs');
//打开一个数据流
 var rs = fs.createReadStream('sa.txt','utf-8');
    rs.on('data',function(s){
           console.log('');
           console.log(s);
        }

    );