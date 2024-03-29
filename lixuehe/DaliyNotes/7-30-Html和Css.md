# Html和Css

## HTML

### 常用标签与属性

<abbr>缩写;当您把鼠标移至缩略词语上时，title 可用于展示表达的完整版本`<abbr title="etcetera">etc.</abbr>`

<acronym>首字母缩写:`<acronym title="World Wide Web Consortium">WWWC</acronym>`

<b>加粗文本

<strong>这个文本是加粗的--定义加重语气

<big>这个文本字体放大

<small>这个文本是缩小的

<i>斜体文本

<em>这个文本是斜体的,-定义着重文字

<code>电脑自动输出
 <sub> 下标

 <sup> 上标 

pre可以保留空格和空行

<code>计算机输出
<kbd>键盘输入
<tt>打字机文本
<samp>计算机代码样本
<var>计算机变量

<bdo> 标签用来覆盖默认的文本方向。 
    ltr 是英文 left to right 的首字母缩写，即从左到右。
    rtl 是英文 right to left 即从右到左。

<p><bdo dir="rtl">该段落文字从右到左显示。</bdo></p>  

<p>以下展示<del>删除效果</del> <ins>插入效果</ins>!</p>

<q>短引用:会将内容加上双引号;

<blockquote:长引用:会将内容自动首行缩进开始一个段落;

<cite>标签定义作品（比如书籍、歌曲、电影、电视节目、绘画、雕塑等等）的标题。

**注释：**人名不属于作品的标题。

<dialog;  <dialog open>标签定义一个对话框、确认框或窗口。 opem 属性规定dialog元素是有效的;

<dt> 标签定义一个描述列表的项目/名字。

<dt> 标签与 [](https://www.runoob.com/tags/tag-dl.html) （定义一个描述列表）和 [](https://www.runoob.com/tags/tag-dd.html) （描述每一个项目/名字）一起使用。

<embed:标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。

<map:标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。

<area> 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。

<area> 元素始终嵌套在 <map> 标签内部。

HTML <area> coords 属性:coords 属性规定区域的 x 和 y 坐标。

| 值                     | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| *x1,y1,x2,y2*          | 如果 shape 属性设置为 "rect"，则该值规定矩形左上角和右下角的坐标。 |
| *x,y,radius*           | 如果 shape 属性设置为 "circ"，则该值规定圆心的坐标和半径。   |
| *x1,y1,x2,y2,..,xn,yn* | 如果 shape 属性设置为 "poly"，则该值规定多边形各顶点的值。如果第一个坐标和最后一个坐标不一致，那么为了关闭多边形，浏览器必须添加最后一对坐标。 |







##### 常用事件属性

```
onclick, ondblclick, onmousedown, onmouseup, onmouseover, 
onmousemove, onmouseout, onkeypress, onkeydown, onkeyup
```