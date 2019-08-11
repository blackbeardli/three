'use strict'
var fs = require('fs');
//创建文本
var data = "bab dawo";
fs.writeFile('sa.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("OK");
    }
    }


    );
