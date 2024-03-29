### 基本模块

---



#### stream

`stream`是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

1. 流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。
2. 标准输入流（stdin）:敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序;
3. 标准输出流（stdout）:如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流;
4. `data`事件表示流的数据已经可以读取了，`end`事件表示这个流已经到末尾了，没有数据可以读取了，`error`事件表示出错了。

案例:

**１．读取文件内数据：**

```
'use strict';
var fs=require('fs');
//打开一个流
var rs=fs.createReadStream('sample.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA');
    console.log(chunk);
});
rs.on('end',function(){
    console.log('END');
});
rs.on('error',function(err){
    console.log('ERROR:'+err);
});

运行结果：
DATA
abcd
END
```

**2.写入数据**

```
'use strict';
var fs = require('fs');
//在output1.txt文件中写入两行数据：
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();
//在output2.txt文件中写入两行数据：
var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
```

***所有可以读取数据的流都继承自`stream.Readable`，所有可以写入的流都继承自`stream.Writable`。***

### pipe(自动实现输出输入流的连接)

* 将一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫`pipe`。

* 让我们用`pipe()`把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：

  ```
  'use strict';
  var fs = require('fs');
  var rs = fs.createReadStream('sample.txt');
  var ws = fs.createWriteStream('copied.txt');
  //实现了将sample.txt中的文件读取出来并直接写入到copied.txt文件中
  rs.pipe(ws);
  ```

* 默认情况下，当`Readable`流的数据读取完毕，`end`事件触发后，将自动关闭`Writable`流。如果我们不希望自动关闭`Writable`流，需要传入参数：

  ```
  readable.pipe(writable, { end: false });
  ```

---

## HTTP服务器

* `request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息；

* response`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把HTTP响应返回给浏览器。

* 案例：在网页打印　`Hello world!`：

  ```
  'use strict'
  //导入http模板
  var http=require('http');
  //创建http server,并传入回调函数；
  var server=http.createServer(function(request,response){
      //回调函数接收request和response对象；
      //获得ＨＴＴＰ请求的ｍｅｔｈｏｄ和ｕｒｌ;
      console.log(request.method+":"+request.url);
      //将Http响应200写入response,同时设置content-Type：text/html;
      response.writeHead(200,{'Content-Type':'text/html'});
      //将Http响应的HTML内容写入到response;
      response.end('<h1>Hello World!</h1>')
  });
  //让服务器监听８０８０端口
  server.listen(8080);
  console.log('Server is running at http://192.168.196.95:8080');
  
  //控制台打印结果：
  Server is running at http://192.168.196.95:8080
  GET:/
  GET:/favicon.ico
  
  网页运行输出：Hello World!
  ```

## 文件服务器

ＵＲＬ解析：`parse()`将一个字符串解析为一个`Url`对象：

案例：

```
'use strict';
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
```

运行结果如下：

```
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }
```

### 处理本地文件目录需要使用Node.js提供的`path`模块，它可以方便地构造目录：

```
'use strict';
var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
使用path模块可以正确处理操作系统相关的文件路径。在Windows系统下，返回的路径类似于C:\Users\michael\static\index.html，这样，我们就不关心怎么拼接路径了。
---------------------------------------------------------------------
最后，我们实现一个文件服务器file_server.js：
'use strict';
var
    fs = require('fs'),     //读写文件
    url = require('url'),   
    path = require('path'),  //组合文件路径
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/
    srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
```

--》

```
命令行输入：
node file_server.js /path/to/dir，把/path/to/dir改成你本地的一个有效的目录，然后在浏览器中输入http://localhost:8080/index.html：
```

```
fs=[object Object]
url=[object Object]
path=[object Object]
http=[object Object]
Static root dir:/home/lixuehe/workspace/NodeJs-
                02/home/lixuehe/workspace/JavaScript-day02/js01-lunbo
Server is running at http://192.168.196.95:8080/
request.url=/lunbo.html
pathname=/lunbo.html
filepath=/home/lixuehe/workspace/NodeJs-            02/home/lixuehe/workspace/JavaScript-day02/js01-lunbo/lunbo.html
```



### 引用知识

> #### path.join
>
> path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
>
> - ...paths string类型
>
> ```
> path.join(__dirname, './02art-template.js');
> // 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\02.art-template.js'
> 
> path.join('/foo', 'bar', './baz');
> // '/foo/bar/baz'
> 
> path.join('/foo', 'bar', '/baz', '..');
> // '/foo/bar'
> ```
>
> #### path.resolve
>
> path.resolve() 把一个路径或路径片段的序列解析为一个绝对路径。
>
> ```
> path.resolve([...paths])
> ```
>
> - ...paths string类型
>
> 1. 给定的路径的序列是 "从右往左" 被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
>
> ```
> path.resolve('foo', '/baz', 'bar');
> // 'C:\baz\bar'
> ```
>
> 1. 如果处理完全部给定的 path 片段后还未生成一个绝对路径，则当前工作目录（绝对路径）会被用上。
>
> ```
> path.resolve('bar', 'baz', 'foo');
> // 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\bar\baz\foo'
> ```
>
> 1. 生成的路径是规范化后的，且末尾的斜杠会被删除，除非路径被解析为根目录。
>
> ```
> path.resolve('/foo', 'bar/', 'baz/');
> // 'C:\foo\bar\baz' 
> // 注意：foo前面的 '/' 代表根目录，即'C:'; 并且baz末尾的斜线会删除
> 
> path.resolve('/');
> // 'C:\' 如果路径为根路径，末尾的斜线不会删除
> ```
>
> 1. 长度为零的path片段会被忽略
>
> ```
> path.resolve('foo', '/baz', '', 'bar');
> // 'C:\baz\bar'
> ```
>
> 1. 如果没有传入path片段，则resolve会返回当前工作目录的绝对路径
>
> ```
> path.resolve();
> // 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path'
> ```

#### crypto

目的：提供通用的加密和哈希算法；

### MD5和SHA1

MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：