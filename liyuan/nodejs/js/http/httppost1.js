var querystring = require('querystring')

function posthttp(req,res) {
    var format = "";
    req.on('data',function(data){
        format+=data;
    });
    req.on('end',function(){
        var obj = querystring.parse(format);
        console.log(obj);
        res.end();
    });

}
exports.posthttp = posthttp;