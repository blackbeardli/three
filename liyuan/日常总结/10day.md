##                                 sass：css扩展语言

#### 1.定义变量 $  如：$ $ hight-color:red   

#### 2 嵌套规则 如 

```
父选择器标识符
&:hover{
color:red;
} = =========  父类：hover{
                        color:red;
                         }
```

#### 3 群组嵌套

```
nav,aside{
   a{
   color:red;
   }
} ========  nav a,aside a{ color:red}
```

#### 4.子组合选择器和同层组合选择器

```
> + ~
```

#### 5嵌套属性

```
nav{
 border:{
 style:solid;
 width:1px;
 color:red;
 }
} === =========== nav{
                    border-style:solid;
                    border-width:1px;
                    border-color:red;
                         }
```

#### 6.导入sass文件 @import 

#### 7.默认变量值: !default      用于变量:如果变量被声明赋值了那就用声明的值，否则用默认值

#### 8.嵌套导入

```
.blud-them{
@import 局部scss文件
} = ==== ==========.blud-them{
                               csss文件里面的内容                
                               }
注意：被导入的局部文件中定义的变量只在区域内生效，这样就可以通过嵌套导入对某一特定区域运用主题样式
```

#### 9.原生的css导入

下列三种情况会导致生成原生的css

1.被导入的文件是css后缀

2。被导入的文件名是一个url地址

3.被导入的文件名是一个css的url（）的值

#### 10.静默注释：就是不会再css中显示的注释。//

#### 11.混合器 @mixin

1.定义混合器用@mixin  调用混合器用 @include

```
@mixin a {
   color:red;
}

.nonte{
width:1px;
@import a
} == ==========.nonte{ 
                       width:1px;
                       color:red;
                       }
```

2.如何更好的使用混合器，那就是会给总体想到一个好名字来概述整个混合器

3.给混合器传参

1.类似与js function（$ 1 $ 2,$3）,可以通过语法  json形式指定参数的值

#### 12.选择器的继承 @extend

```
.a{
  color :red
}

.s{
@extend .a
}== ======   ======.s{
                        color:red;
                      }
```

1.不要用后代选择器去继承 如 div p

#### 13.占位符选择器 %foo 必须通过@extend调用,如果不被@extend调用的话不会产生任何代码

#### 14.全局变量 !global   把局部变量变成全局变量

#### 15.数组  @each 遍历数组中的每一项。

#### 16. 控制指令 @if

```
如 p{
   @if 1+1 ==2{
   border:1px;
   }
} ======      ===== p{
                      border:1px;
                      }
```

#### 17.@for

```
1.@for $var from  1 through   2 
2.@for $var from  1 to    2(不包含)
```

#### 18.@each 通常用于遍历 @each $var in <list>

```
如：@each $a in b,c,d,e{
color:red;
} ========================== a{
      b-color:red
      c-color:red
      d-color:red
}
```

