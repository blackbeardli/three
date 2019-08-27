# 用ajax实现了评论区

## 重点和难点

我分了两个服务器,分别是提交评论的接收服务器,和,页面刷新时候请求的服务器.可以使用路由来做到一个服务器当中.  
跨域问题.  
时间转换为格式化时间.  
汉字的解码.  
提交评论后的回调刷新.  

## 关于页面的一点见解

bootstrap3和bootstrap4有较大的差异,导致适用bootstrap3的类名在bootstrap4中不能体现效果,甚至导致页面乱掉.  
我个人认为,bootstrap3中的导航栏比b4提供的导航栏要好用,但是,b4的卡片,的确好用.  

## 页面的ajax完成后的回调函数

ajax方法的书写方式

    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:3001/",
        data:text,
        dataType:"text",
        success:function(data){
        location.reload(true);
        window.location.reload();
        }
    });    

`dataType:"text"`漏掉了这句话,导致了success:后的函数无法调用.  
