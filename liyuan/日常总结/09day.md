##        Bootstrap

####  1.Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。

#### 2**响应式设计**：Bootstrap 的响应式 CSS 能够自适应于台式机、平板电脑和手机

#### 3 Bootstrap网格系统:Bootstrap 包含了一个响应式的、移动设备优先的、不固定的网格系统，可以随着设备或视口大小的增加而适当地扩展到 12 列。它包含了用于简单的布局选项的预定义类，也包含了用于生成更多语义布局的功能强大的混合类

#### 4 

- 行必须放置在 **.container** class 内，以便获得适当的对齐（alignment）和内边距（padding）。
- 使用行来创建列的水平组。
- 内容应该放置在列内，且唯有列可以是行的直接子元素。
- 预定义的网格类，比如 **.row** 和 **.col-xs-4**，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。
- 列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 **.rows** 上的外边距（margin）取负，表示第一列和最后一列的行偏移。
- 网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 **.col-xs-4**。

#### 5下面是 Bootstrap 网格的基本结构：

```
<div class="container">
   <div class="row">
      <div class="col-*-*"></div>
      <div class="col-*-*"></div>      
   </div>
   <div class="row">...</div>
</div>
<div class="container">....
```

#### 6.Bootstrap 排版 代码 表格 表单 按钮 图片 辅助类 响应式实用工具 字体图标(Glyphicons)  下拉菜单（Dropdowns）输入框组 导航栏 面包屑导航（Breadcrumbs）分页 标签 徽章（Badges）页面标题（Page Header）缩略图   警告（Alerts）