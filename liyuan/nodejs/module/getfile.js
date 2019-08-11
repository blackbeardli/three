var fs = require('fs');
fs.stat('sa.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log(stat.isFile());
        if(stat.isFile()){
            console.log(stat.size);
            console.log(stat.mtime);
        }
    }
    }




);