#　React

### 九.箭头函数

```
// function expression
function () { ... }
// arrow function expression
() => { ... }   //箭头函数
```

注意点：

* 箭头函数表达式会使用包含它的语境下的 this 对象;
* 当函数只有一个参数时，可省略括号，多个参数不可省略；
* 可以使用简洁函数替换块状函数体(花括号包含的内容),简洁函数的返回不用显示声明；
* 可移除掉函数的 return 表达式。

简化后代码：

```
class App extends Component {
  render() {
    return (
      <div className="App">
        {
            //箭头函数的写法,简洁函数代替块状函数体；移除return返回值。
            list.map(item =>
            <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.points}</span>
                  <span>{item.num_comments}</span>
              </div>
          )
        }
      </div>
    );
  }
}
export default App;

```

### 十.ES6 类

类的例子

```
class Developer {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	getName() {
	return this.firstname + ' ' + this.lastname;
}
```

* 创建了一个类：Developer；

* 创建一个用来实例化的构造函数，可以传入参数给类赋值，

* 可以定义函数（方法）；

* 实例化一个类

  ```
  const robin = new Developer('Robin', 'Wieruch');
  console.log(robin.getName());
  // output: Robin Wieruch
  ```

##　总结

• React
– 使用 create-react-app 创建一个 React 应用
– JSX 混合使用了 HTML 和 JavaScript 在 React 组件的方法中定义它的输出
– React 中,组件、示例和元素是不同的概念
– ReactDOM.render() 是 React 应用连接 DOM 的入口方法
– JavaScript 内建函数可以在 JSX 中使用

* map 可以被用来把列表成员渲染成 HTML 的元素

## React 特点

- **1.声明式设计** −React采用声明范式，可以轻松描述应用。
- **2.高效** −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- **3.灵活** −React可以与已知的库或框架很好地配合。
- **4.JSX** − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
- **5.组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- **6.单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

ES6
• 根据不同的使用场景,选择用 const 和 let 来声明变量
– 在 React 应用中尽量使用 const 来声明变量
• 箭头函数可以用来是你的函数变得更简洁
• 在 React 中,通过继承类的方式来声明组件



---

####　练习中的知识点

##### 一.使用JSX指定属性:

可以使用引号将字符串文字指定为属性：

```
const element = <div tabIndex="0"></div>;
```

可以使用花括号在属性中嵌入JavaScript表达式：

```
const element = <img src={user.avatarUrl}></img>;
```

* 问题：

```
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl:'dz4.png'  //将图片放在了public文件中，成功
  //avatarUrl:'../image/dz4.png' //图片相对路径，失败
  //avatarUrl:'/home/lixuehe/hackernews/image/dz4.png'//图片的绝对路径，失败
  // avatarUrl:'https://www.imooc.com/static/img/newcomer.png'//网上图片，成功
};
//引入img的属性
const element = <img src={user.avatarUrl}></img>;
ReactDOM.render(                                                                                                                                                                       
  element,
  document.getElementById('root')
);
```

**引入图片失败及解决办法：**

1. 引入本地图片，图片位置在 hackernews文件下的image中，使用绝对路径与相对路径引入，都失败了；
2. 引入网上任意图片，成功；
3. 将图片放在public 中，在引入，成功;
4. 引入外部模块的方式，引入图片，成功；
5. 可能原因：
   * 使用React 进行npm Start 后，路由获取为指定的public 中的文件。

