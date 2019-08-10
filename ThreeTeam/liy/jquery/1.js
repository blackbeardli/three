// var a  = document.getElementById('div1');
// // alert(a);
// // console.log(a.toString());
// // console.log(a);
// var b = $('div');
//       var d = b.get(0);
// // var c = $(a);
// alert(a);
// // alert(c);
// alert(d);
// var a = $('div').attr('id','div6');
// console.log(a)
// var a = $('p').attr('style');
// console.log(a);
//  $('div').addClass('div7');
// $('div').toggleClass('div7');
// $('div').toggleClass('div6');
// var a = $('div').hasClass('div6');
// console.log(a);
// $(document).ready(function(){
//    alert(1+1);
// });
// $(function(){
//    // $('#btnok').blur(function(){
//    //     alert('hello world');
//    // });
//    //  $('#btnok').click(function(){
//    //     alert('hello,world');
//    //  });
//    //  $('#btnok').dblclick(function(){
//    //     alert('hello');
//    //  });
//    //  $('#btnok').keydown(function(){
//    //     alert('hello');
//    //  });
//    //  $('#btnok').bind('click',function(){
//    //     alert('hello');
//    //  });
//    //  $(':submit').bind('click',function(){
//    //      var username = $(':text').val();
//    //      var password = $(':password').val();
//    //      if(username == ''|| password == ''){
//    //          alert('账号密码不能为空');
//    //           event.preventDefault();
//    //      }
//    //  });
//     //动画效果
//     // $('#btnShow').bind('click',function(){
//     //       $('#result').show(3000);
//     // });
//     // $('#btnHide').bind('click',function(){
//     //    $('#result').hide(3000,function(){
//     //        alert('hello');
//     //    })
//     // });
//     //以动画效果向上或向下滑动
//     // $('#btnslideDown').bind('click',function(){
//     //    $('#result').slideDown();
//     // });
//     //
//     // $('#btnslideUp').bind('click',function(){
//     //    $('#result').slideUp();
//     // });
//     // $('#btnslideToggle').bind('click',function(){
//     //    $('#result').slideToggle();
//     // })
//     // $('#btnfadeIn').bind('click',function(){
//     //    $('#result').fadeIn(5000);
//     // });
//     // $('#btnfadeOut').bind('click',function(){
//     //    $('#result').fadeOut(5000);
//     // });
//    // $('#btnok').bind('click',function(){
//    //    $('#box').animate({
//    //        left:+200,
//    //        top:+200
//    //    },1000);
//    // });
//     //把内容插入到元素内部
//     // // $('#btnok').bind('click',function(){
//     // //     $('div').append('hello')
//     // })
//     // $('#btnok').bind('click',function(){
//     //     $('div').prepend('hello');
//     // })
//     // $('#btnok').bind('click',function(){
//     //    $('p').prependTo('div');
//     // });
//     // $('#btnok').bind('click',function(){
//     //    $('p').appendTo('div');
//     // });
//     //外部插入
//     // $('#btnok').bind('click',function(){
//     //    $('div').after('ssss');
//     // // });
//     // $('#btnok').bind('click',function(){
//     //     $('div').before('ssss');
//     // })
//     // $('#btnok').bind('click',function(){
//     //    $('p').insertAfter('div');
//     // });
//     // $('#btnok').bind('click',function(){
//     //     // $('p').empty();
//     //     $('p').remove();
//     // });
//    //为水浒传绑定一个事件
//    //  $('li:eq(1)').bind('click',function () {
//    //        alert('水浒传');
//    //  });
//    //  $('#btnok').bind('click',function(){
//    //      //克隆水浒传
//    //      $('li:eq(1)').clone().appendTo('ul');
//    //  })
//     $('#btnok').bind('click',function(){
//        //使用wrap对所有匹配的元素进行包裹操作
//        $('div').wrap('<i></i>')
//     });
// });
//      var a = $('div').eq(0);
//    a.html('test');

    // $('div').filter('.div3').html('test');
        jQuery.fn.extend({
            fn1:function(color){
                this.css('')
            }
        })










