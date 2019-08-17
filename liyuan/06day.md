##                                                  nodejs

##   一：

####    1.nodejs是什么：是一个在后端运行js代码的运行环境。npm是nodejs的包管理工具。

####    2.严格模式语法是'use strict',在终端可以传递参数打开严格模式语法.node --use strict

####    3.nodejs可以加载别的函数和别的模块 

```
 module.export s = 函数。意义为把函数作为模块的输出暴漏出去。
```

4. #### 别的函数和模块可以调用暴露出来的函数。

   ```
   s = require('s')。意义在其他函数中调用这个模块 
   ```

   ## 二：

   #### 1.commonjs规范：就是每一个模块内部，都有一个对象变量moudle代表模块。moudle就是对外接口，加载这个模块其实就是加载该模块的moudle exports属性。

   #### 2.process是nodejs提供的对象代表着当前进程。process。nextTime也可以是定时器

   ## 三：nodejs的基本模块

   #### 1.js模块：js模块是对文件进行读取和写入的。读取提供了同步和异步的处理方法。同步的处理方法，异步的处理方法

   ```
   fs.readFile('filename','字符集编码',function);
   fs.readFilesync('filename','字符集编码')这个没有回调函数，结果直接返回。
   ```

   #### 写入提供了异步和同步的方法。

   ```
   fs.writeFile('filename','输入的文字',function);默认是utf-8格式，如果参数是buffer则写入的是二进制文件
   fs.writeFIlesync('filename','输入的文字')
   fs.stat()可以获取文件的信息，返回的是stat对象，拥有一些查看文件的方法
   
   ```

   #### 2.stream模块

   #### stream是js提供的又一个仅在服务器段可用的流模块。目的是支持流结构

   ```
   读取：fileReadsteam('filename','字符集编码');
   写入:fileWriteStream('filename','字符集编码');
   所有的可读流继承stream.readable
   所有的可写流继承stream.write
   
   ```

   #### pipe()是readable流里的方法，可以起到文件复制的效果

   rs = fileReadStream("");

   ws = fileWriteStream("");

   rs.pipe(ws);如果ws文件不存在，则自动创建。如果不希望：自动关闭write流，需要传入参数。

   #### 3.http模块是构建服务器的模块

   response对象封装了http响应，可以调用方法把http返回给浏览器

   request对象封装http请求，可以调用方法把http请求信息返回给浏览器

   搭建http服务器流程

   1.导入http模块

   2.创建服务器对象，并传入回调函数

   3.回调函数接收request对象和response对象

   4.获得http请求的method和url

   5.将http响应的200写入reponse同时设置content-type：text、html

   6.讲http响应的html内容写入response

   7.让服务器监听8080端口。

   ```
   创建服务器对象
   http.createServer(function(request reponse){
   
   }
   )
   ```

   #### 4.url模块。解析完整的请求路径的。

   ```
   通过parse()将一个字符串解析为一个url对象
   ```

   #### 5.path模块：处理本地文件目录需要使用，可以方便的构建目录。

   ```
   resolve()总是返回一个以相对于当前的工作目录的绝对路劲
   ```

   