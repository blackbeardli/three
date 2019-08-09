var fs  = require("fs");
var err = fs.statSync("sa.txt");
if(!err){
    console.log(err);
}else{
    console.log(stat.isFile());
    if(stat.isFile()){
        console.log(stat.size);
        console.log(stat.birthtime);
    }
}