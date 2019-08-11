var net = require('net');
var hostname = process.argv[2];
var port = process.argv[3];
var client = net.connect({host: hostname, port: port}, function () {
    console.log('链接上服务器');
    //设置utf8'可以打中文
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable',function(){
        var chunk = process.stdin.read();
        if(chunk !== null){
            client.write('dat：'+chunk);
        }
    });
});
client.on('data', function (data) {
    console.log(data.toString());
    //client.end();
});
client.on('end', function () {
    console.log('断开服务器');
});