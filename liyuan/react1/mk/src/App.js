import React, { Component } from 'react';
// import './Component/mk.css';
// import './Component/mk1.css';
import Header from "./Component/header/header";
import Footer from "./Component/footer/footer";
import Elevator from "./Component/elevator/elevator";
import Main from "./Component/main/main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
         <Main/>
        <Footer/>
        <Elevator/>
      </div>
    );
  }
}

export default App;
