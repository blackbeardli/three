 'use strict';
 var http=require('http');
 var url=require('url');
 var qs=require('querystring')
 http.createServer(function (request,response) {
     if (request.method=="GET") {
         console.log("GET  method request")
         doGET(request,response)
     } else if (request.method=="POST") {
        console.log("POST  method request")
         doPOST(request,response)
     }else{
         response.end()
     }
    
     
 }).listen(3001,'127.0.0.1');
 console.log('Server Running at http://127.0.0.1:3001/');

function doGET(request,response) {
    // var obj=qs.parse(url.parse(request.url).query)
    // console.log(obj)
    response.writeHead(200,{'Content-Type':'text/html,charset=utf8','charset':"utf8"});
    response.write('<html>')
    response.write('<body>')
    response.write('<form method="post">')
    response.write('<b>UserName :</b><input name="username" ></br>')
    response.write('<b>PassWord : </b><input name="password" type="password" ></br>')
    response.write('<b></b><input name="submit" type="submit" ></br>')
    response.write('</form>')
    response.write('</body>')
    response.write('</html>')
    response.end();
}
function doPOST(request,response) {
    var formData="";
    request.on('data',function(data){
        console.log(data.toString())
        formData+=data; 
    })
    request.on('end',function (data) {
        var obj=qs.parse(formData);
        response.end()
        console.log(obj)
        // console.log(obj.toString())
    })
    // console.log(request)
    response.write('seccess!')
    // response.end()
} 