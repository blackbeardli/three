// var input=$('[name=name]');
// // input.val('hahah');
// input.change(function(){
//     console.log('changed..');
// });
// input.val('change it!');
// input.change();
// var div=$('.a');
//  div.css('background-color','pink').css('color','red').css('border','1px solid red');
// div.width('300px');
// div.height('300px');
// div.slideUp('slow');
// div.slideDown(3000);
// div.animate({
//     opacity:0.5,
//     width:'200px',
//     height:'200px'
// },3000);
// div.animate({
//     opcity:0.25,
//     width:'500px',
//     height:'500px'
// },3000,function(){
//     console.log('动画效果已结束!');
//     $(this).css('color','blue');
// });

//  div.slideDown(2000)
//     // .delay(1000)
//     .animate({
//         width: '256px',
//         height: '256px'
//     }, 2000)
//     // .delay(1000)
//     .animate({
//         width: '128px',
//         height: '128px'
//     }, 2000);
// var c=$('#test-css li');
// console.log(c);
//  var a=$('#test-css li:first-child');
//  console.log(a);
//  var b=$('#test-css li:last-child');
//  console.log(b);
// a.css('border','1px solid red');
// b.css('border','1px solid red');

// var jqxhr = $.get('/path/to/resource', {
//     name: 'Bob Lee',
//     check: 1
// });

// $.fn.highlight=function (options){
//     var opts=$.extend({},$.fn.highlight.defaults,options);
//     this.css('backgroundColor',opts.backgroundColor).css('color',opts.color);
//     return this;
// }
// $.fn.highlight.defaults={
//     color:'red',
//     backgroungColor:'blue'
// }
// ---------------------------------------------------------------------
// 全选框和反选框
// var
//     form = $('#test-form'),//得到这个form表单
//     langs = form.find('[name=lang]'),//得到除了全选之外的所有的复选框
//     selectAll = form.find('label.selectAll :checkbox'),//得到类名为selectAll的复选框--全选的复选框,
//     selectAllLabel = form.find('label.selectAll span.selectAll'),//得到全选的span
//     deselectAllLabel = form.find('label.selectAll span.deselectAll'),//得到全不选的span
//     invertSelect = form.find('a.invertSelect');//得到反选的a

//     console.log(selectAll.length);
// // 重置初始化状态:
// // form.find('*').show().off();
// // form.find(':checkbox').prop('checked', false).off();
// deselectAllLabel.hide();//先让全不选复选框隐藏
// // // 拦截form提交事件:
// // form.off().submit(function (e) {
// // e.preventDefault();
// // alert(form.serialize());
// // });

// //监听全选,全不选 /当全选的复选框状态改变时调用这个方法
// selectAll.change(function(){
//     //如果全选的复选框被选择的时候,就让全选变为全不选,并将所有的input框变为选中
//     if($(this).prop('checked')){
//         //将所有input变为选中状态   
//         langs.prop('checked',true);
//         //将全选的span隐藏掉
//         selectAllLabel.hide();
//         //将全不选的span显现出来
//         deselectAllLabel.show();
//     }else{
//         //将所有input变为非选中状态
//         langs.prop('checked',false)
//         selectAllLabel.show();
//         deselectAllLabel.hide();
//     }
// })
// //监听反选
// invertSelect.click(function(){
//     langs.map(function(){
//         this.checked=!this.checked;
//     });
// });

// ////判断函数
// //当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；
// //当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。

// langs.change(function(){
//     //console.log(langs.prop('checked'));
//     var checked=true;
//     //遍历langs中的复选框的checked 属性是否为真
//     langs.map(function(){
//         //属性值为假时,checkede=false
//         if(!($(this).prop('checked'))) {
//             checked=false;
//         }  
//     }) 
//         //如果都为真     
//         if(checked){
//             //将全选复选框选中
//             selectAll.prop('checked',true);
//             //将全选span 隐藏
//             selectAllLabel.hide();
//             //将全不选span 显现
//             deselectAllLabel.show();
//         }else{
//             selectAll.prop('checked',false);
//             selectAllLabel.show();
//             deselectAllLabel.hide();
//         }  
// });  
// -----------------------------------------------------------------------------------
//编写jquery插件
// $.fn.highlight2 = function (options) {
//     // this已绑定为当前jQuery对象:
//     var bgcolor=options && options.backgroundColor || 'pink';
//     var color=options && options.color||'yellow';
//     this.css('backgroundColor', bgcolor).css('color', color);
//     return this;
// }
// $('#test-highlight2 span').highlight2({
//     backgroundColor:'red',
//     color:'blue'
// });
// $.fn.highlight = function (options) {
//     // 合并默认值和用户设定值:
//     var opts = $.extend({}, $.fn.highlight.defaults, options);
//     this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
//     return this;
// }

// $.fn.highlight.defaults={
//     color:'white',
//     backgroundColor:'blue'
// }
// $.fn.highlight.defaults.color = 'green';
// $.fn.highlight.defaults.backgroundColor = '#f2fae3';
// $('#test-highlight p:first-child span').highlight();
//----------------------------------------------------------------------------
//jquery 官网

// var a=$("div p");
// console.log(a);
// a.css('backgroundColor','red').css('color','white');
// b.css('backgroundColor','blue').css('color','white');
var a=$('ul:last-child');
var b=$('li:last');
console.log(a);
console.log(a.html());
// console.log("a="+a.html());
// a.map(function(){
//     console.log($(this).html());
// })
console.log("---------------------------------------------");
console.log(b);
console.log("b="+b.html());
console.log("---------------------------------------------");
// :last 将匹配所有的集合中的最后一个元素。
// :last-child 将匹配集合中的所有位置为最后一个的子元素。
// :last 将永远返回一个元素，而 
// :last-child可能返回一批元素。

//:last 只匹配最后一个元素，而:last-child将为每个父元素匹配最后一个子元素
// var c=$('ul li');
// console.log(c);
// console.log(c.html());
// console.log(c.length);
// //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// c.map(function(){
//     console.log($(this).html());
// })

// var d=$('ul li:first-child');
// console.log(d);
// var e=$('ul li:first');
// console.log(e);