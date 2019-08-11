var net = require('net');
var clientList  = [];
var server = net.createServer(function (socket){
   clientList.push(socket);
    socket.write('sucess');

socket.on('data',function(data){
    console.log(data.toString());
      guangbo(data);
});
socket.on('end',function(){
    socket.write(data);
});
});
function guangbo(data){
    for(var i=0;i<clientList.length;i++){
         clientList[i].write(data);
    }
}
server.listen(1555,'127.0.0.1');