// var a=$('ul.lang li.lang-javascript');   
// console.log(a);
// console.log("--------------------------");
// var ul=$('ul.lang');
// var hsk=ul.find('[name=haskell]');
// console.log(hsk);

// var swf = $('#swift'); // 获得Swift
// var parent = swf.parent(); // 获得Swift的上层节点<ul>
// var a = swf.parent('.red'); // 获得Swift的上层节点<ul>，同时传入过滤条件。如果ul不符合条件，返回空jQuery对象
// alert(a);
// var swift = $('#swift');

// var ss=swift.next(); // Scheme
// console.log(ss)
// swift.next('[name=haskell]'); // 空的jQuery对象，因为Swift的下一个元素Scheme不符合条件[name=haskell]

// swift.prev(); // Python
// swift.prev('.dy'); // Python，因为Python同时符合过滤器条件.dy
// 拿到JavaScript, Python, Swift, Scheme和Haskell
// var langs = $('ul.lang li').length;
// console.log(langs);
// var lang=$('.lang li');
// var arr=lang.map(function () {
//     return this.innerHTML;
// }).get();
// console.log(arr);
// console.log(arr.length);
// for(let i of arr){
//     console.log(arr[i]);
// }
// var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
// var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
// var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
// var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
// function abc(){
//     var name=$('[name=name]').val();
//     console.log(name);
//     alert(name);
// }
// $('#test-ul li').text("哈哈");
// var j1 = $('#test-ul li.js').text();
// var j2 = $('#test-ul li[name=book]').html();
// alert(j1);
// console.log(j1);
// alert(j2);
// var a=$('.lang-1');
// a.hide();
// 浏览器可视窗口大小:
// var a=$(window).width(); // 800
// var b=$(window).height(); // 600

// // HTML文档大小:
// var c=$(document).width(); // 800
// var d=$(document).height(); // 3500
// var div=$('.a');
// div.width(400);
// div.height('200px');
// var a=div.width();
// var b=div.height();
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// var test=$('#lang li');
// var test=$('li span').innerHTML;lang-1
// var se=$(".lang-1").text();
// alert(se)
// alert(test);

// var a=$('a');
// a.attr('href','sahdjhsjk');
// alert(a.attr('href'));
// alert(a.prop('href'));

// var
//     input = $('#test-input'),
//     select = $('#test-select'),
//     textarea = $('#test-textarea');


// input.val('hhahah');
// var input1=input.val();
// console.log(input1); // 'test'
// // input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

// select.val(); // 'BJ'
// select.val('SH'); // 选择框已变为Shanghai

// textarea.val(); // 'Hello'
// textarea.val('Hi'); // 文本区域已更新为'Hi'
var ul = $('#test-div>ul');
ul.append('<li><span>Haskell</span></li>');
var ul = $('#test-div>ul');
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
ul.append(ps);
// 添加jQuery对象:
ul.append($('#scheme'));

// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除