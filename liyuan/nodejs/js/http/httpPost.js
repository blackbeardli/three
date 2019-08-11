var querystring = require('querystring');
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
exports.doPosts = doPost;