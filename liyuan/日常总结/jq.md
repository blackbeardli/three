### 内容选择器：

1.contains(test)获取包含地址的文本元素

2.empty获取内容为空的元素

3.has(selecter):获取内容包含制定选择的元素

4.parent:获取内容不为空

### 属性选择器:

1[attribute]:获取具有指定属性的元素

### dom对象转换成jq对象

jq = $(dom)

### jq对象转换成dom对象

dom = jq.get[索引]

### 过滤器：

1first-child 第一个元素

2 last-child 最后1个子元素

### 基本属性操作：

1.attr()获取元素的name属性

2.attr(key,value)设置元素的属性

3 remove Attr(name:删除元素 name 属性)

### class属性:

1.addclass(class) 为元素添加class属性

2.removeclass(class) 移除元素class属性

3.hasclass 判断是否有

4.toggleclass 切换元素的class属性，存在的话移除，反之添加

### 页面加载事件：

1.$(function(){

});

### 动画效果:

1.show()显示 hide()隐藏

2.slideup向上 slideDown 向下

3 fadeIn淡入 fadeout淡出

4关闭所有动画 ：fx.off

5.自定义动画效果:animate(params,[speed])

params :json 对象 :动画效果

### 文档处理

## 内部插入 

####  1.1 append(content) 把content内容追加元素内容

#### prepend(content)把内容插入到元素内容头部

#### 1.2外部插入

after尾部 before头部

### 删除操作 empty()清空元素的内容 remove()清空元素的同时删除自身

### 复制方法

clone()清空元素的效果 clone(true):复制元素的本身

还会复制的克隆事件

### 替换方法

replacewith(内容)

replaceAll(selector)讲匹配的元素替换所有selector元素

### 实现ajax应用

1.load()方法 load(url,[data],[call back]) 从服务器加载数据 并把数据放入被选元素

参数url为记载服务器地址 [data]为请求时发送数据

[call back]为数据成功后，执行回调函数

2.get Json()方法 通过httpGet 请求载入json数据

3.$.get(url,[call back])

4.$.post(url,[callback])

5.serialize()可以将表单中有name的属性进行序列话

6.ajax(url,[settings])数组对象

1.url:""

2:data

7.ajaxstart() 和 ajaxstop方法是绑定ajax事件

ajaxstart()方法用于ajax请求发出前触发函数

ajaxstop()用于ajax请求后触发的函数

