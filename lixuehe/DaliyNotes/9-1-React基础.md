# React基础

### 十.可复用组件

* 声明一个Button组件，代替button元素

```
class Button extends Component{
  render(){
    const{
      onClick,
      //定义一个className属性，若没有指定className 属性,它的值就是一个空字符串,而			非undefined 。
      className='',
      children,
    }=this.props;
    return (
      <button 
      onClick={onClick}
      className={className}
      type="button"
      >
      {children}
      </button>
    );
  }
}
```

* 代替原本的button

```
<span>
    <Button onClick={() => onDismiss(item.objectID)}>
   	 	Dismiss
    </Button>
</span>
```

#### React 不同的组件类型？

* 函数式无状态组件:
  * 这类组件就是函数,它们接收一个输入并返回一个输出。输入是props,输出就是一个普通的 JSX 组件实例;
  * 函数式无状态组件是函数(函数式的),并且它们没有本地状态(无状态的),没有 this
    对象;
  * 没有生命周期方法的；生命周期方法：constructor() and render() 。constructor 在一个组件的生命周期中只执行一次,而 render() 方法会在最开始执行一次,并且每次组件更新时都会执行；
* ES6 类组件:
  * 在类的定义中,它们继承自 React 组件；
  * extend 会继承所有的生命周期方法，使用 render() 类方法；
  * 可以使用 this.state 和 this.setState() ,你可以在 ES6 类组件中储存和操控 state；
* React.createClass:（不推荐使用）

#### 将 Search、Table 和 Button 组件重构成函数式无状态组件

```
const isSearched=serachTeam=>item=>
  item.title.toLowerCase().includes(serachTeam.toLowerCase());
//App没有改动
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
    //在原数组中筛选包含其他id的一个新的数组
    const updateList=this.state.list.filter(isNotId);
    // 重新设置state
    this.setState({list:updateList});
  }
  //onChange函数,event对象的target属性中带有输入框的值
  onSerachChange(event){
    // 得到我输入框的内容
    this.setState({serachTeam:event.target.value});
  }
  // render()函数,onChange 当内容发生改变时触发
  render(){
    const {serachTeam,list}=this.state;
    return(
      <div className="App">
        {/* 用于搜索的输入组件 */}
        <Search
          value={serachTeam}
          onChange={this.onSerachChange}
        >Search</Search>
        {/* 用于展示的列表组件 */}
        <Table
          list={list}
          pattern={serachTeam}
          onDissmisss={this.onDissmisss}
        />
        </div>         
    );
  }               
}
//将Button组件重构成函数式无状态组件
const Button=({onClick,className='',children,})=>
    <button 
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
//将Search组件重构成函数式无状态组件
const Search =({value,onChange,children})=>
  // const {value,onChange,children}=props;
    <form>
      {children}<input
      type="text"
      value={value}
      onChange={onChange}
    />
    </form>
//将Table组件重构成函数式无状态组件
const Table=({list,pattern,onDissmisss})=>
    <div>
      {list.filter(isSearched(pattern)).map(item=>
        <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.points}</span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>
              <Button onClick={()=>onDissmisss(item.objectID)}>
                Dissmiss  
              </Button> 
            </span>
        </div>
        )}
    </div>
export default App;

```

### 十一.给组件声明样式

* 在src/App.css 和 src/index.css 文件中修改样式的具体内容；

* 将以上编写好的样式应用到App Es6的组件中；即添加对应的className;

* 直接在JSX 中编写css样式

  ```
  const Table=({list,pattern,onDissmisss})=>
      <div className="table">
        {list.filter(isSearched(pattern)).map(item=>
          <div key={item.objectID} className="table-row">
              <span style={midColumn}>
                <a href={item.url}>{item.title}</a>
              </span>
              <span style={smallColumn}>{item.points}</span>
              <span style={largeColumn}>{item.author}</span>
              <span style={midColumn}>{item.num_comments}</span>
              <span style={midColumn}>
                <Button onClick={()=>onDissmisss(item.objectID)}
                        className="button-inline"
                >
                  Dissmiss  
                </Button> 
              </span>
          </div>
          )}
      </div>
  
  // 定义一些css的style样式
  const largeColumn = {
    width: '30%',
    };
    const midColumn = {
    width: '20%',
    };
    const smallColumn = {
    width: '10%',
    };
  ```