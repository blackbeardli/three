function doGet(req,res){
    //get请求 解析出表单数据
    //各种请求信息。
    //console.log(req.url);
    //把各种信息解析成url对象
    // var u = url.parse(req.url)
    //解析成url对象之后里面有个query属性
    //存放着表单的提交属性
    //query就是字符串
    // var query = u.query;
    //query模块加载后，调用parsen方法解析字符串成对象
    // var obj = querystring.parse(query);
    // console.log(obj.username);

    res.writeHead(200, {'Conten-Type': 'text/html'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="get">');
    res.write('username:<input name="username">');
    res.write('password:<input name="password" type="password"><input type="submit">');
    res.write('</form >');
    res.write('</body >');
    res.write('</html>');
    res.end();
}
exports.doGet = doGet;