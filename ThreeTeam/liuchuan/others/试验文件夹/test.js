'use strict'
var fs=require('fs');
fs.readFile('car01.jpg',function(err,data){
    if (err) {
        console.log(err)
    } else {
        console.log(data.length+'bytes')
        console.log(err)
        console.log(data)
        var cc=data.toString('utf8');
        console.log("************")
        console.log(cc);
        var aa=Buffer.from(cc,'utf-8');
        console.log(aa);
        console.log( aa.length+'bytes');
    }
});
