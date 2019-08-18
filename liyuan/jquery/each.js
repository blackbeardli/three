
$(function () {
    //遍历div的值
   // $('#btnok').bind('click',function(){
   //     $('div').each(function (i,item) {
   //         item.innerHTML = '第'+(i+1)+'个div';
   //     });
   // });
    //遍历p
    // $('#btnok').bind('click',function(){
    //     $('p').each(function (i,item) {
    //         $(item).attr('text-color','red');
    //     });
    // })
    //ajax
    // $('#btnok').bind('click',function(){
    //    $.ajax({
    //        url:'each.html',
    //        type:'get',
    //        success:function(msg){
    //            alert(msg);
    //        }
    //    }) ;
    // });
    //选择 javascript
    //          var a =$('#para-1').html();
    //          alert(a);
    //选取所有
    //           $('[class^="color-"]').html(
    //选择erlang
    //                var a =  $('.color-red.color-green').html();
    //                alert(a);'test');
    //         $('input[name=name]').html('test');
    //    $('.lang-javascript').html('test');
    // $('ul.lang li').html('test');
    // $('ul li.lang-javascript').html('test')
    // $('ol li.lang-swift').html('test');
    // $('.lang').find('.dy').html('tast');
           $('ul.lang li').filter('.dy').html('tast');
});