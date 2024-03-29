# NodeJs-视频知识-01

## 一.表单数据的提交与解析

* req  --request 请求信息;

* res  --response 接收的响应信息(返回信息);

* req.url --请求的链接;

* 编码格式设置:

  * *res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});* 

    **text/html**的意思是将文件的content-type设置为text/html的形式，浏览器在获取到这种文件时会自动调用html的解析器对文件进行相应的处理。

    **text/plain**的意思是将文件设置为纯文本的形式，浏览器在获取到这种文件时并不会对其进行处理。

* `querystring` 模块提供用于解析和格式化 URL 查询字符串的实用工具。

### GET请求

**接收Get**

1. get参数在req.url上

2. 使用url.parse将数据由字符串转变为obj;

**接收Post**

 当请求这个页面时，如果post数据中没有name和url，则返回一个提交页面；如果有name和url，则打印。

1. post请求会触发"data"事件。
2. 请求结束，会触发"end"事件。

```
var http=require('http');
var url=require('url');
var qs=require('querystring');
var server=http.createServer(function(req,res) {
    if (req.method == "GET") {
        doGet(req, res);
    } else if (req.method == "POST") {
        doPost(req, res);
    }else{
        res.end();
    }
});
server.listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
function doGet(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html>');
        res.write('<head>');
        res.write('<title>');
        res.write('</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form method="post">');
        res.write('<html>');
        res.write('username:<input name="username">');
        res.write('password:<input name="paswword" type="password"><input type="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
}
function doPost(req,res){
    //一旦当请求接收到数据就调用这个函数
    //formDate 暂存请求信息
    var formDate="";
    req.on('data',function(data){
        //console.log(data.toString());
        //每当接收到请求体数据，累加到formDate中
        formDate+=data;
    });
    //所有数据包发完
    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end',function () {
     // 解析参数,将一个字符串反序列化为一个对象
        var obj=qs.parse(formDate);
        console.log(obj);//{ username: 'asdas', paswword: '333' }
        res.end();
    })

}
```

----

### 分离成三个文件的写法

**1. 在httpGet与httpPost 中暴露方法:**

***exports.doGet=doGet;***

***exports.doPost=doPost;***

**2.在app.js中引入,并使用get.doGet/post.doPost调用**

***var get=require('./httpGet');
var post=require('./httpPost');***

**3.案例:**

* app.js

```
var http=require('http');
var url=require('url');
var qs=require('querystring');

//引入外部调用的方法
var get=require('./httpGet');
var post=require('./httpPost');
var server=http.createServer(function(req,res) {
    if (req.method == "GET") {
    //使用get.进行调用
        get.doGet(req, res);
    } else if (req.method == "POST") {
        post.doPost(req, res);
    }else{
        res.end();
    }
});
server.listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
```

* httpGet.js

```
function doGet(req,res){
    //console.log(req.url);
    //var u=url.parse(req.url).query;
    // obj=qs.parse(url.parse(req.url).query);
    //console.log(obj);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="post">');
    res.write('账号:<input name="username">');
    res.write('密码:<input name="paswword" type="password"><input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}
//增加将方法暴露出去的模块
exports.doGet=doGet;
```

* httpPost

```
var qs=require('querystring');
function doPost(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write("<h1>面朝大海,春暖花开</h1>");
    // console.log(req);
    //一旦当请求接收到数据就调用这个函数
    var formDate="";
    req.on('data',function(data){
        //console.log(data.toString());
        formDate+=data;
    });
    //所有数据包发完
    req.on('end',function () {
        var obj=qs.parse(formDate);
        console.log(obj);//{ username: 'asdas', paswword: '333' }
        res.end();
    })
}
//增加将方法暴露出去的模块
exports.doPost=doPost;
```



