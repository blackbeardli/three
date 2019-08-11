function gethttp(req,res) {
    //拿出了get方式的表单提交的信息
    // var obj = querystring.parse(url.parse(req.url).query);
    // console.log(obj);
    res.writeHead(200,{'Conten-Type': 'text/html'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('<body>');
    res.write('<form method="post">');
    res.write('username:<input name="username">');
    res.write('password:<input name="password"><input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</head>');
    res.write('</html>');
    res.end();
}
exports.gethttp = gethttp;