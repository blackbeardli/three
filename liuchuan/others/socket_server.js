var net=require('net');
var str2="client1 SAID : "
var str1="SERVER RE : "
var clientList=[];
var server=net.createServer(function (socket) {
    clientList.push(socket);
    socket.write("Connected Server Success! \r\n");
    // socket.pipe(socket);
    socket.on('data',function(data){
        console.log(str2+data.toString())
        // socket.write(data)
        // console.log(str1+data)+
        // try {
        //     broadcast(data)
        // } catch (error) {
            
        // }
        broadcast(data)
    });

    // socket.on('error',function(){
    //     clientList.delete(socket)
    // });
        // socket.write("Disconnect From Server ! ");
    // })
});
server.listen(1337,'127.0.0.1');



function broadcast(data) {
    for (let i = 0; i < clientList.length; i++) {
       try {
        clientList[i].write(data);
       } catch (error) {
           clientList.splice(i,1)
       }
        
    };
};