# React 基础

### 四.事件处理:

* 传递给世家处理器的必须是一个函数；

##### 点击事件触发删除函数

例如，想要通过点击按钮的事件触发这个删除事件

##### 简洁的正确写法：

```
<button
    onClick={() => this.onDismiss(item.objectID)}
type="button">
```

##### 情况一：

```
onClick={this.onDismiss(item.objectID)}    点击按钮代码不会执行
```

##### 情况二：

```
onClick={this.onDismiss}    点击按钮会触发函数，但是不会删除内容
```

* onClick={doSomething()}:doSomething() 函数会在浏览器打开程序时立即执行,
  由于监听表达式是函数执行的返回值而不再是函数,所以点击按钮时不会有任何事发生。
* onClick={doSomething} 时,因为 doSomething 是一个函数,所以它会在点击按钮
  时执行

##### 解决情况二不会删除内容的问题，因为没有传递参数：item.objectID;

##### 方案一：

在外部定义一个包装函数,并且只将定义的函数传递给处理程序。因为需要访问特定的列表项,所以它必须位于 map 函数块的内部。		可以进行删除

```
class App extends Component {
...
	render() {
		return (
			<div className="App">
			{this.state.list.map(item => {
			//
			const onHandleDismiss = () =>
			this.onDismiss(item.objectID);
				return (
					<div key={item.objectID}>
						<span>
                        <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                        <button
                        	onClick={onHandleDismiss}
                        	type="button"
                        >
                        Dismiss46
                        React 基础
                        </button>
                        </span>
                        </div>
                  );
             }
             )}
             </div>
        );
}
```

### 五.表单交互，实现搜索功能

```
 // 和表单交互,通过表单的搜索临时过滤列表
  // 定义一个高阶函数,y用于搜索对应的内容
  /*
  function isSearched(serachTeam){
    return function(item){
      //some condition which returns true or false
      //toLowerCase()把字符串转换为小写;includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
      return item.title.toLowerCase().includes(serachTeam.toLowerCase());
    }
  }*/
  // 简化的高阶函数----------------

  const isSerached=serachTeam=>item=>
      item.title.toLowerCase().includes(serachTeam.toLowerCase());
  class　App extends Component{
    //构造函数
    constructor(){
      super();
      this.state={
        list,
        serachTeam:'',
      }
      //绑定删除函数
      this.onDissmisss=this.onDissmisss.bind(this);
      //绑定onSerachChange函数
      this.onSerachChange=this.onSerachChange.bind(this);
    }
    //删除函数
    onDissmisss(id){
      // 找到除点击外的其他id
      function isNotId(item){
        return item.objectID!==id;
      }
      //在原数组中筛选包含其他id 的一个新的数组
      const updateList=this.state.list.filter(isNotId);
      // 重新设置state
      this.setState({list:updateList});
    }
    //onChange函数,event对象的target属性中带有输入框的值
    onSerachChange(event){
      console.log(event.target);
      this.setState({serachTeam:event.target.value});
    }
    // render()函数,onChange 当内容发生改变时触发
    render(){
      return(
        <div className="App">
          <form>
            <input type="text" 
            //增加受控组件，控制input框的值
            value={this.state.serachTeam}
            onChange={this.onSerachChange}
            />
          </form>
          {/*遍历list */}
          {this.state.list.filter(isSerached(this.state.serachTeam)).map(item=>
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.points}</span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>
                  <button
                    onClick={()=>this.onDissmisss(item.objectID)} 
                    type="button"
                  >
                    Dissmiss</button>
                  </span>
              </div>
            )}
        </div>
      );
    }
      
  }
```

实现效果：

![1567067924480](/home/lixuehe/.config/Typora/typora-user-images/1567067924480.png)

![1567067960765](/home/lixuehe/.config/Typora/typora-user-images/1567067960765.png)

输入想要搜索的内容，就会出现！

### 六.ES6解构

##### 解构的原理：从一个对象一次性解析出多个属性给不同变量，比如数组中解析出元素，从map/set中解析出数据等。

#####　任何解构都有两个部分 
1 解构源： 等号右边是要解构的对象。 
2 解构目标：等号左边是要解构的对象。

##### 例：

```
const users = ['Robin', 'Andrew', 'Dan'];
	const [
		userOne,
		userTwo,
		userThree
	] = users;
console.log(userOne, userTwo, userThree);
// output: Robin Andrew Dan
```

其实，其中的userOne=users.userOne;userTwo=users.userTwo;

### 七.受控组件：

受控组件是渲染表单的组件，但表单状态的来源位于组件状态内，而非DOM内，Reactd在控制表单的状态，这样做的好处在于：
一、它们支持即时输入验证；二、它们允许你有条件地禁用或启用表单按钮；三、它们限制了输入的格式。

##### 例如：

表单元素比如 <input> , <textarea> 和 <select> 会以原生 HTML 的形式保存他们自己的状态。一旦有人从外部做了一些修改,它们就会修改内部的值,在 React 中这被称为不受控组件,因为它们自己处理状态。在 React 中,你应该确保这些元素变为受控组件。
你应该怎么做呢?你只需要设置输入框的值属性,就像上I边的那个案例一样，我们增加input 框的属性为value={this.state.serachTeam}即可；

