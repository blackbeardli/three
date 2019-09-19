import React, {Component} from "react";
import Banner from "./banner";
import Elitebg from "./elitebg";
import Sztj from "./sztj";
import Xshk from "./xshk";
import Xsrm from "./xsrm";
import Jnts from "./jnts";
import Qyjs from "./qyjs";
import Ywsj from "./ywsj";
import Qmx from "./qmx";
import './css/main.css';
class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="bk"></div>
                  {/*轮播图*/}
                  <div className="bgfff banner-box">
                      <Banner/>
                  </div>

                      {/*实战推荐*/}
                      <div className="bgfff">
                         <Sztj/>
                      </div>

                      {/*新上好课*/}
                      <div className="bg000">
                          <Xshk/>
                      </div>
                      {/*新手入门*/}
                    <div className="bgfff">
                        <Xsrm/>
                    </div>
                       {/*技能提升*/}
                <div className="bg000">
                    <Jnts/>
                </div>
                  {/*前沿技术*/}
                <div className="bgfff">
                    <Qyjs/>
                </div>
                  {/*猿问手机*/}
                <div className="bg000">
                    <Ywsj/>
                </div>
                  {/*精英讲师模块*/}
                    <Elitebg/>
                 {/*全明星模块*/}
                <div className="bgfff">
                    <Qmx/>
                </div>
            </div>


            );
    }
}

export default Main;