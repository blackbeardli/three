# React

## React简介：

### 一.环境及必备的包安装node 和 npm

1. 查看本地是否有node 和npm

   ```
   node -v
   npm -v
   ```

2. 安装全局的node 包：

   ```
   npm install -g <package>:-g 标记指定 npm 安装一个全局的包
   以 React 为例,应该写成:npm install react	
   ```

3. 创建个人项目专属的 node_modules/ 文件夹和 package.json 文件－－以便于通过 npm 安装新的本地包。

   ```
   npm init -y   -y 标记将把你的 package.json 内容初始化成默认值
   ```

4. npm install --save-dev <package>]

   --save-dev 标记表示该 node 包只是用作开发环境的一部分,并不会被作为你产品代码的一
   部分发布。

### 二.安装React

1. CDN安装：CDN 指的是内容分发网络(content  delivery network)

   ```
   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></\
   script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.developmen\
   t.js"></script>
   ```

   - **react.min.js** - React 的核心库（引入的第一个）
   - **react-dom.min.js** - 提供与 DOM 相关的功能（引入的第二个）

2. 项目已有package.json文件，通过命令行安装：react 和 react-dom

   1. npm init -y 初始化npm 项目

   2. npm install react react-dom

### 三.零配置搭建React应用

使用create-react-app创建应用,各种工具和配置都会在后台集成；

步骤：

1. 将create-react-app安装位node的全局包：

   　npm install -g create-react-app

2. 检查 create-react-app 的版本来验证是否安装成功：

   ​    create-react-app --version

3. 创建React 应用：

   ​    create-react-app hackernews
   ​    cd hackernews：

      npm start;  //使用create-react-app快速搭建React开发环境;

4. 创建的应用中包含的内容有：

   * README.md:包含了这个项目的一些基本的指令和介绍;
   * node_modules/: 这个文件夹包含了所有通过 npm 安装的 node 包;
   * package.json: 这个文件包含了 node 包依赖列表和一些其他的项目配置;
   * .gitignore: 这个文件包含了所有不应该添加到 git 仓库(repository)中的文件和文件
     夹;
   * public/: 这个文件夹包含了所有你的项目构建出的产品文件。最终所有你写在 src/ 文
     件夹里面的代码都会在项目构建的时候被打包放在 public 文件夹下。
   * manifest.json 和 registerServiceWorker.js:暂时不用；

###　四.使用npm安装和删除模块包：

1. 安装模块包
   npm安装模块包的方式有两种：全局安装和本地安装:

   **全局安装：**

   * `npm install <package-name> -g`
     全局安装后，可以通过使用对应模块包的命令行工具执行操作命令。

   **本地安装：**

   - 本地安装模块包的一个特点就是：在使用安装好的模块包时，需要通过require('<package-name>')来引入到项目中使用；

   **本地安装时还需要考虑的一个问题就是安装好模块包后，其信息是否要写入到项目package.json中？如果写，写到哪？因此，本地安装衍生出三种命令，分别为：**

   - npm install <package-name>
     安装模块包，模块包的信息不会写入到项目的package.json文件中；

   - npm install <package-name> --save
     安装模块包，并且将模块包的信息写入到项目package.json中的dependencies对象中；

   - npm install <package-name> --save-dev
     安装模块包，并且将模块包的信息写入到项目package.json中的devDependencies对象中；

2. 删除模块包
   删除与安装相对应，也分为全局删除和本地删除

   **全局删除：**

   * npm uninstall <package-name> -g
     本地删除：

   **对应的，本地删除也需要考虑是否再删除模块包的同时删除项目package.json中对应的信息，因此，利用npm本地删除模块包的命令也是三种，分别为：**

   - npm uninstall <package-name>
     删除模块包，对应模块包的信息不会从项目package.json文件中删除；

   - npm uninstall <package-name> --save
     删除模块包，并且将对应的模块包信息从项目package.json的dependencies对象中删除；

   - npm uninstall <package-name> --save-dev
     删除模块包，并且将对应的模块包信息从项目package.json的devDependencies对象中删除；

### 五.create-react-app创建的npm项目中，附带的下面 npm 脚本

```
// 在 http://localhost:3000 启动应用
	npm start
// 运行所有测试
	npm test
// 构建项目的产品文件
	npm run build
```

## JSX 简介

React 使用 JSX 来替代常规的 JavaScript。

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

我们不需要一定使用 JSX，但它有以下优点：

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

打开之前创建的hackernews

src/App.js文件

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//声明一个名字是APP的Ｒeact Es6类组件(class component)
class App extends Component {
//render() 方法包含了它所返回的元素(element),元素是组件的构成部,
  render() {
    return (
    //以下代码就是ＪＳＸ代码，允许含有ＨＴＭＬ代码与JavaScript
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

```

代码简化：＋例子

```
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  //将要放在h2标签的内容定义为一个变量	//使用{}引入变量
    var helloWorld = 'Welcome to the Road to learn React';
    var chun='面朝大海，春暖花开！';
    var name=['li','ming'];
    var friend={'firstname':'li','last-name':'ming'};
    return (
      <div className="App">   
          <h2>{helloWorld}</h2>
          <h2>{chun}</h2>
          <h2>{'姓氏：'+name[0]}</h2>
          <h2>{'名字：'+name[1]}</h2>
          <h2>{'first-name:'+friend.firstname}</h2>
          <h2>{'last-name：'+friend['last-name']}</h2>
      </div>
    );
  }
}
export default App;
```

npm start

结果：

![1566827716362](/home/lixuehe/.config/Typora/typora-user-images/1566827716362.png)

* jsx中不可以使用if else 语句，只可以使用

### 六.ES6 const 和 let

**const声明的变量不能被重新复制或重新声明，不能被改变，可以使用他创建不可变数据结构。**

***但是如果这个变量是数组或者对象的话,它里面持有的内容可以被更新.***

**Let声明的变量可以被改变**

#### 七.ReactDOM

src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//原始内容
ReactDOM.render(
  <App />,    //第一个是准备渲染的 JSX-对应APP.js中　export default App;
  document.getElementById('root')   //第二个参数指定了 React应用在你的 HTML 中的放置的位置;
);
//更改后
 ReactDOM.render(   
 	<h1>Hello React World</h1>,
  	document.getElementById('root')
 );
```

**ReactDOM.render() 会使用你的 JSX 来替换你的 HTML 中的一个 DOM 节点**

传入的参数：

1. 第一个是准备渲染的 JSX;
2. 第二个参数指定了 React应用在你的 HTML 中的放置的位置;

### 八.模块热替换（HMR）

**模块热替换(HMR)是一个帮助你在浏览器中重新加载应用的工具,并且无需再让浏览
器刷新页面。**

在src/index.js文件中进行配置,增加代码如下

```
if (module.hot) {
	module.hot.accept();
}
```

##### 优点：

* 方便调试：更改代码后不会刷新页面，调试信息可以完整的保持在开发控制台中；
* 保持应用状态：更改源代码后浏览器不会重新加载整个页面，而是保持刚才的应用状态，应用本身被重新加载，但页面不会被重新加载；
