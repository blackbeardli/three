var net = require('net');
var clientList = [];
//1splice
var server = net.createServer(function (socket) {
    clientList.push(socket);
    //console.log(socket)
    socket.write('succes');
    //socket.pipe(socket);
    //2
    socket.on('data', function (data) {
        console.log(data.toString());
        //socket.write(data);
        broadcast(data);
    });
    //3


    socket.on('end', function () {
        // if(clientList.push(socket)==2) {
        clientList.splice(clientList.indexOf(socket), 1);
        //socket.write("data");
        //}
    });

});

function broadcast(data) {
    for (var i = 0; i < clientList.length; i++) {
        clientList[i].write(data);
        //if(clientList.length-1){
        // clientList[i]= clientList[i]-1;
        //}

    }
}

server.listen(1337, '127.0.0.1');