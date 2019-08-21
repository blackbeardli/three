
$(function(){
$.get("http://localhost:8050/1.txt",function (data) {
     var arr = data.split("#");
     for (var i=0;i<arr.length-1;i++){
          // $('ul').append("<li>"+arr[i].split("&")+"</li>");
         var arr1 =  arr[i].slice(9,(arr[i].indexOf("coment")-1));
          var arr2 = arr[i].slice((arr[i].indexOf("coment")+7),(arr[i].indexOf("date")-1));
         var arr3 = arr[i].slice((arr[i].indexOf("date")+5),(arr[i].length));
         // if(arr[i] == ){
         //     $('#ta1').append("<tr><td>"+arr1+"</td>"+"<td>"+arr2+"</td>"+"<td>"+arr3+"</td></tr>");
         // }
         // $('.td2').append("<h4>内容："+arr2+"</h4>");
         // $('.td3').append("<h4>时间:"+arr3+"</h4>");
         $('.div3').append("<div class='div8'><div class='div5'>"+arr1+"</div>"+"<div class='div6'>"+arr2+"</div>"+"<div class='div7'>"+arr3+"</div></div>");
     }

   });
});
    $("#button1").on('click',function(){
        var username = $('#username');
        var coment = $('#coment1');
        var myDate = new Date();
        var date1 =  myDate.toLocaleString( );
        username1 =username.val();
        coment1=coment.val();
        // var json = [];
            if(username1.length !=0 && coment1.length != 0) {
                 $.ajax({
                     url: "http://localhost:8050/",
                     type: "Post",
                     data: {"username": username1, "coment": coment1, "date":date1+"#"},
                     // dataType: "json",
                     dataType:"text",
                     // contentType: "application/json",
                     success: function (data) {
                         alert("写入成功！");
                             // $("tr").append("<tr><td>"+username1+coment1+date1+"</td>");
                            // $("ul").append("<li>"+"username:"+username1+"</li>")
                            // $("ul").append("<li>"+"coment:"+coment1+"</li>")
                            // $("ul").append("<li>"+"date:"+date1+"</li>")
                         window.open("severform.html");
                         // window.open(self - URL,"./severform.html");

                     },
                     error:function (data) {
                         alert("失败");
                     }
                 });
             }else{
                 alert("用户名或内容不能为空");
             }
            //初始化输入框
            username.val("");
            coment.val("");
    });

