//加载页面初始化事件
$(function(){
   $("#frmV").validate({
      rules:{
          email:{
              required:true,
              email: true
          }
      },
       errorPlacement:function(error,element){
          error.appendTo(".tip");
       }
   });
});
