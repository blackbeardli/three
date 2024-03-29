

# Jquery

###  一.选择器

* 按ID查找---:`$('#id名称')`         返回一个jQuery对象,不存在返回[ ];

  ```
  // 查找<div id="abc">:
  var div = $('#abc');
  ```

* 按照Tag查找---`$('tag名称')`

* 按照class查找---`$('.class名称')`

* 找到匹配任意一个类的元素:`$("div,span,p.myClass")`

* 按照属性查找:

  * 当属性的值包含空格等特殊字符时，需要用双引号括起来;

  * 按属性查找还可以使用前缀查找或者后缀查找：

    ```
    var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
    // 例如: name="icon-1", name="icon-2"
    var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
    // 例如: name="startswith", name="endswith"
    var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
    // 例如: class="icon-clock", class="abc icon-home"
    ```

* 组合查找:

  ```
  //查找name=email 的input 输入框 
  var emailInput = $('input[name=email]'); // 不会找出<div name="email">
  
  //根据tag和class来组合查找:查找tr下的class为red的列
  var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>
  ```

* 层级选择器:可以使用:`$('tag名称 tag名称')`来选择，层级之间用空格隔开。

* `>`子选择器:`$('parent>child')`类;

* 过滤器（Filter:

  ```
  $('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
  $('ul.lang li:first-child'); // 仅选出JavaScript
  $('ul.lang li:last-child'); // 仅选出Lua
  $('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
  $('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
  $('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素
  
  ```

* 表单元素

  ```
  :input：可以选择<input>，<textarea>，<select>和<button>；
  
  :file：可以选择<input type="file">，和input[type=file]一样；
  
  :checkbox：可以选择复选框，和input[type=checkbox]一样；
  
  :radio：可以选择单选框，和input[type=radio]一样；
  
  :focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
  
  :checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
  
  :enabled：可以选择可以正常输入的<input>、<select> 等，也就是没有灰掉的输入；
  
  :disabled：和:enabled正好相反，选择那些不能输入的。
  ```

* ```
  $('div:visible'); // 所有可见的div
  $('div:hidden'); // 所有隐藏的div
  ```

---

## 二.查找和过滤

```
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>
```

```
var ul = $('ul.lang'); // 获得<ul>
var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme
```

#### 查找:

- find();

* parent():  从当前节点开始向上查找;
* next():  位于同一层级的节点下一个;
* prev():位于同一层级的节点上一个;

#### 过滤

* filter():  过滤掉不符合选择器条件的节点:

  ```
  var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
  var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme
  
  //传入一个函数，要特别注意函数内部的this被绑定为DOM对象，不是jQuery对象：
  var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
  langs.filter(function () {
      return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
  }); // 拿到Swift, Scheme
  ```

* map() :把一个jQuery对象包含的若干DOM节点转化为其他对象：

  ```
  var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
  var arr = langs.map(function () {
      return this.innerHTML;
  }).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
  ```

* first()   last()    slice():可以返回一个新的jQuery对象，把不需要的DOM节点去掉：

  ```
  var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
  var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
  var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
  var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
  ```

  * slice(start,end):  数组的截取---返回一个从start开始到end(不包括)的数组,不改变原有数组;

  * splice(index,howmany,item) :向/从数组中添加/删除项目，然后返回被删除的项目,改变原数组的结构;

    ---可以得到从index下标开始,长度为howmangy 的一个数组;

    ---index:规定添加/删除项目的位置，使用负数可从数组结尾处

    ---howmany:要删除的项目数量。如果设置为 0，则不会删除项目;

    ---item 向数组中添加的新项目;

## 三.操作DOM

1. 获取文本信息:

* text():获取节点的文本;
* html():获取原始HTML文本;
* 不传入参数是获取文本,传入参数是设置文本;

2. 修改css:

   * `css('name', 'value')`

3. 修改class属性:

   ```
   var div = $('#test-div');
   div.hasClass('highlight'); // false， class是否包含highlight
   div.addClass('highlight'); // 添加highlight这个class
   div.removeClass('highlight'); // 删除highlight这个class
   ```

4. 显示和隐藏DOM

   show();显示;

   hide():隐藏

5. attr 和 removeAttr()   操作DOM节点的属性    //prop方法类似attr

   1. 获取属性:attr('属性名');
   2. 设置属性:attr("属性名","属性值");
   3. 删除属性:removeAttr("属性名");

6. 操作表单:

   * val(); 获取表单中的元素;
   * val('值'):设置表单的值;

7. 修改DOM结构:

   1. `append()`把DOM添加到最后，`prepend()`则把DOM添加到最前。
   2. 同级节点可以用`after()`或者`before()`方法。
   3. remove():  删除节点;

## 事件

1. 鼠标事件:

   * click: 鼠标单击时触发；
   * dblclick：鼠标双击时触发；
   * mouseenter：鼠标进入时触发；
   *  mouseleave：鼠标移出时触发；
   *  mousemove：鼠标在DOM内部移动时触发；
   * hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

2. 键盘事件:键盘事件仅作用在当前焦点的DOM上，通常是`<input>`和`<textarea>`。

   * keydown：键盘按下时触发；
   * keyup：键盘松开时触发；
   * keypress：按一次键后触发。

3. 其他事件;

   * focus：当DOM获得焦点时触发；

   * blur：当DOM失去焦点时触发；

   * change：当`<input>`、`<select>`或`<textarea>`的内容改变时触发；

   * submit：当`<form>`提交时触发；

   * ready：当页面被载入并且DOM树完成初始化后触发.

     ```
     //正常的ready事件
     $(document).ready(function () {
         // on('submit', function)也可以简化:
         $('#testForm).submit(function () {
             alert('submit!');
         });
     });
     ------------------------------------
     简化后:
     $(function () {
         // init...
     });
     ```

   * 取消绑定:  `off('click', function)`

     * 例如:

       ````
       function hello() {
           alert('hello!');
       }
       a.click(hello); // 绑定事件
       
       // 10秒钟后解除绑定:
       setTimeout(function () {
           a.off('click', hello);
       }, 10000);
       ````

       

   :last     :last-child