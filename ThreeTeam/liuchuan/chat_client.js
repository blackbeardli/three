var net=require('net');
var str1="    Liu: ";
var str2="SERVER : "
var neirong1="client1发送了一些内容。。。";
var host_port={host:'127.0.0.1',port:1337};
var client=net.connect(host_port,function () {
    console.log("connected succeed");
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable',function(){
        var chunk=process.stdin.read();
        if (chunk!==null) {
            client.write('data : '+chunk);
        };
    });
    // client.write(neirong1);
    // console.log(str1+neirong1);
});
client.on('data',function(data){
    // console.log(data);
    // console.log(typeof(data));
    console.log(str2+(data.toString()));
    // client.end();

});
client.on('end',function(){
    console.log('disconnected from server')
});