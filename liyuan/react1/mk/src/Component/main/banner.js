import React, {Component} from "react";
import $ from 'jquery';
import './css/banner.css';
import Shouji from "../module/shouji";
import Banner1 from "../module/banner1";
import Innerbox1 from "../module/innerbox1";
import Module from "../module/module";
import Recomment from "../module/recomment";
const list =[
    //1
    {
        div: 'item',
        id:'a',
        span:'前沿 / 区块链 / 人工智能'
    },
    //2
    {
        div: 'item item1',
        id:'b',
        span:'前端 / 小程序 / JS'
    },
   //3
    {
        div: 'item item2',
        id:'c',
        span:'后端 / JAVA / Python',
    },
   //4
    {
        div: 'item item3',
        id:'d',
        span:'移动 / Android / iOS',
    },
    //5
    {
        div: 'item item4',
        id:'e',
        span:'云计算 / 大数据 / 容器',
    },
    //6
    {
        div: 'item item5',
        id:'f',
        span:'运维 / 测试 / 数据库',
    },
   //7
    {
        div: 'item item6',
        id:'g',
        span:'UI设计 / 3D动画 / 游戏',
    },

];
const list1=[
    {
        a1:['微服务','区块链','以太坊','机器学习','深度学习','计算机视觉','数据分析&挖掘'],
        span1:['前沿技术'],
    }
];
const list2=[
    {
        a1:['HTML/CSS','JavaScript','Vue.js','Angular','Node.js','Bootstrap','小程序'],
        span1:['前端开发'],
    }
];
const list3=[
    {
        a1:['Java','SpringBoot','Spring Cloud','Python','爬虫','To','PHP','C','C++','C#','Ruby'],
        span1:['后端开发'],
    }
];
const list4=[
    {
        a1:['Android','iOS','React native','WEEX'],
        span1:['移动开发'],
    }
];
const list5=[
    {
        a1:['计算机网络','算法与数据结构','数学'],
        a2:['大数据','Hadoop','Spark','Hbase','Storm'
        ,'云计算','AWS','Docker','Kubernetes'],
        span1:['计算机基础'],
        span2:['云计算&大数据'],

    }
];
const list6=[
    {
        a1:['运维','自动化运维','运维工具','中间件','Linux','测试',
        '功能测试&挖掘','性能测试&挖掘','自动化测试','接口测试','安全测试'],
        a2:['MySQL','Redis','MongoDB','Oracle','SQL Server'
            ,'NoSql'],
        span1:['运维&测试'],
        span2:['数据库'],

    }
];
const list7=[
    {
        a1:['模型制作','动效动画','设计基础','设计工具','APPUI设计','产品交互'],
        a2:['Unity 3D','Cocos2d-x'],
        span1:['UI设计&多媒体'],
        span2:['UI设计'],

    }
];
const listt1=[
    {
        img:'./img/120.jpg',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'666',
        dian:'dian',
    },
    {
        img:'./img/120.jpg',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'384',
        dian:'dian',

    },
    {
        img:'./img/120.jpg',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'1147',
        dian:'dian',

    },
    {
        img:'./img/120.jpg',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'2665',
        dian:'dian',

    },

];
const listt2=[
    {
        img:'./img/121.png',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥699.00',
        coursecardinfo:'6步/42课',
        iconsetsns:'84',
        dian:'dian',

    },
    {
        img:'./img/11.png',
        coursecardname:'前端零基础入门',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'977',
        dian:'dian',

    },
    {
        img:'./img/104.jpg',
        coursecardname:'Java',
        coursecardprice:'￥799.00',
        coursecardinfo:'中级',
        iconsetsns:'4478',
        dian:'dian',

    },
    {
        img:'./img/101.jpg',
        coursecardname:'java攻城狮',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'7887',
        dian:'dian',

    },
];
const listt3=[
    {
        img:'./img/500.jpg',
        coursecardname:'java零基础入门',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'14459',
        dian:'dian',

    },
    {
        img:'./img/501.jpg',
        coursecardname:'网络编程与实战',
        coursecardprice:'￥899.00',
        coursecardinfo:'中级',
        iconsetsns:'36555',
        dian:'dian',

    },
    {
        img:'./img/48.jpg',
        coursecardname:'内存分析',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'785',
        dian:'dian',

    },
    {
        img:'./img/120.jpg',
        coursecardname:'OpenCV+TensorFlow 入门人工智能图像处理',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'622',
        dian:'dian',

    },
];
const listt4=[
    {
        img:'./img/41.jpg',
        coursecardname:'Android 零基础入门',
        coursecardprice:'￥299.00',
        coursecardinfo:'5步/40课',
        iconsetsns:'6744',
        dian:'dian',

    },
    {
        img:'./img/42.jpg',
        coursecardname:'新版React Native+Redux打造高质量上线App',
        coursecardprice:'￥399.00',
        coursecardinfo:'中级',
        iconsetsns:'1211',
        dian:'dian',

    },
    {
        img:'./img/43.jpg',
        coursecardname:'Flutter从入门到进阶 实战携程网App',
        coursecardprice:'￥899.00',
        coursecardinfo:'中级',
        iconsetsns:'63366',
        dian:'dian',

    },
    {
        img:'./img/44.jpg',
        coursecardname:'Top团队大牛带你玩转Android性能分析与优化',
        coursecardprice:'￥799.00',
        coursecardinfo:'高级',
        iconsetsns:'222',
        dian:'dian',

    },
];

const listt5=[
    {
        img:'./img/44.jpg',
        coursecardname:'Kubernetes',
        coursecardprice:'￥299.00',
        coursecardinfo:'中级',
        iconsetsns:'429',
        dian:'dian',

    },
    {
        img:'./img/45.jpg',
        coursecardname:'轻松愉快之玩转SpringData',
        coursecardinfo:'中级',
        iconsetsns:'29878',
    },
    {
        img:'./img/46.jpg',
        coursecardname:'高等数学-学习算法/人工智能/大数据的第一步',
        coursecardprice:'￥266.00',
        coursecardinfo:'中级',
        iconsetsns:'934',
        dian:'dian',

    },
    {
        img:'./img/47.jpg',
        coursecardname:'HBase入门',
        coursecardinfo:'中级',
        iconsetsns:'670',
    },
];

const listt6=[
    {
        img:'./img/48.jpg',
        coursecardname:'一站式学习Redis  从入门到高可用分布式实践',
        coursecardprice:'￥348.00',
        coursecardinfo:'中级',
        iconsetsns:'670',
        dian:'dian',

    },
    {
        img:'./img/36.jpg',
        coursecardname:'使用java构建和维护接口自动化测试框架',
        coursecardinfo:'中级',
        iconsetsns:'670',

    },
];
const listt7=[
    {
        img:'./img/70.jpg',
        coursecardname:'产品交互设计快速入门与实战',
        coursecardprice:'￥199.00',
        coursecardinfo:'初级',
        iconsetsns:'370',
        dian:'dian',

    },
    {
        img:'./img/71.jpg',
        coursecardname:'高薪设计师必修课 AE移动UI动效设计从入门到实战',
        coursecardprice:'￥199.00',
        coursecardinfo:'中级',
        iconsetsns:'284',
        dian:'dian',

    },
    {
        img:'./img/72.jpg',
        coursecardname:'Axure入门初体验',
        coursecardprice:'￥299.00',
        coursecardinfo:'入门',
        iconsetsns:'62798',
        dian:'dian',

    },
    {
        img:'./img/73.jpg',
        coursecardname:'前端工程师必备的PS技能——切图篇',
        coursecardinfo:'中级',
        iconsetsns:'25669',
    },
];
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:list,
            list1:list1,
            list2:list2,
            list3:list3,
            list4:list4,
            list5:list5,
            list6:list6,
            list7:list7,
            listt1:listt1,
            listt2:listt2,
            listt3:listt3,
            listt4:listt4,
            listt5:listt5,
            listt6:listt6,
            listt7:listt7,

        };
    }
    render() {
        return (
            <div className="g-banner pr">
                <div className="menuwrap"></div>
                 {/*隐藏区域1*/}
                 <div className="submenu a hide" data-id="a" style={{display: "none"}}>
                     {this.state.list1.map(item =>
                         <Innerbox1 item={item}/>
                     )}
                    <div className="recomment-box">

                        {this.state.listt1.map(item =>
                            <Recomment item={item}/>
                        )}
                    </div>
                </div>

                  {/*2*/}
                 <div className="submenu b hide" data-id="b" style={{display: "none"}}>
                     {this.state.list2.map(item =>
                         <Innerbox1 item={item}/>
                     )}

                    <div className="recomment-box">
                          {/*入门人工只能图像*/}
                        {this.state.listt2.map(item =>
                            <Recomment item={item}/>
                        )}

                    </div>
                </div>

                  {/*3*/}
                  <div className="submenu c hide" data-id="c" style={{display: "none"}}>
                      {this.state.list3.map(item =>
                          <Innerbox1 item={item}/>
                      )}
                    <div className="recomment-box">

                        {this.state.listt3.map(item =>
                            <Recomment item={item}/>
                        )}

                    </div>
                </div>

                {/*4*/}
                <div className="submenu d hide" data-id="d" style={{display: "none"}}>
                    {this.state.list4.map(item =>
                        <Innerbox1 item={item}/>
                    )}
                    <div className="recomment-box">
                         {/*入门人工只能图像*/}
                        {this.state.listt4.map(item =>
                            <Recomment item={item}/>
                        )}

                    </div>
                </div>

                {/*5*/}
                <div className="submenu e hide" data-id="e" style={{display: "none"}}>
                    {this.state.list5.map(item =>
                        <Innerbox1 item={item}/>
                    )}

                    <div className="recomment-box">
                        {this.state.listt5.map(item =>
                            <Recomment item={item}/>
                        )}

                    </div>
                </div>

                {/*6*/}
                <div className="submenu f hide" data-id="f" style={{display:"none"}}>
                    {this.state.list6.map(item =>
                        <Innerbox1 item={item}/>
                    )}
                    <div className="recomment-box">
                        {/*入门人工只能图像*/}
                        {this.state.listt6.map(item =>
                            <Recomment item={item}/>
                        )}

                    </div>
                </div>

                {/* 7*/}
                <div className="submenu g hide" data-id="g" style={{display: "none"}}>
                    {this.state.list7.map(item =>
                        <Innerbox1 item={item}/>
                    )}
                    <div className="recomment-box">
                         {/*入门人工只能图像*/}
                        {this.state.listt7.map(item =>
                            <Recomment item={item}/>
                        )}
                    </div>
                </div>

            {/*    左区域*/}
                <div className="menuContent">

                    {/*1*/}
                    {this.state.list.map(item =>
                        <Banner1 item={item}/>
                    )}

                </div>
             {/*轮播图框*/}
                <div className="g-banner-content">
                      {/*轮播图*/}
                    <div id="demo" className="carousel slide" data-ride="carousel" >

                         {/*指示符 */}
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            <li data-target="#demo" data-slide-to="3"></li>
                            <li data-target="#demo" data-slide-to="4"></li>
                            <li data-target="#demo" data-slide-to="5"></li>
                        </ul>

                        {/*轮播图片*/}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/301.png"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/302.jpg"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/303.jpg"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/304.png"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/305.png"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/306.jpg"/>
                            </div>
                        </div>

                         {/*左右切换按钮 */}
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon1">&lt;</span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon1">></span>
                        </a>
                    </div>
                </div>
            {/*下面的白条*/}
                <div className="path-banner clearfix">
                    <a href="#">
                        <i className="i-web"></i>
                        <p className="tit">web前段攻城狮</p>
                        <p className="desc">从未接触编程也可以学好</p>
                    </a>
                    <a href="#">
                        <i className="i-java"></i>
                        <p className="tit">java攻城狮</p>
                        <p className="desc">综合就业排名第一</p>
                    </a>
                    <a href="#">
                        <i className="i-python"></i>
                        <p className="tit">python攻城狮</p>
                        <p className="desc">应用领域最为广泛的语言</p>
                    </a>
                    <a href="#">
                        <i className="i-android"></i>
                        <p className="tit">Android攻城狮</p>
                        <p className="desc">移动设备市场份额第一</p>
                    </a>
                    <a href="#">
                        <i className="i-php"></i>
                        <p className="tit">PHP攻城狮</p>
                        <p className="desc">web开发首选语言</p>
                    </a>

                </div>
            </div>






    );
    }
}
$(function(){
    $('.item').mouseenter(function(){
        $('.a').css("display", "block");
    });
    $('.item').mouseleave(function(){
        $('.a').css("display","none");
    });
    $('.a').mouseenter(function(){
        $('.a').css("display", "block");
    });
    $('.a').mouseleave(function(){
        $('.a').css("display","none");
    });
    $('.item1').mouseenter(function(){
        $('.b').css("display","block");
    });
    $('.item1').mouseleave(function(){
        $('.b').css("display","none");
    });
    $('.b').mouseenter(function(){
        $('.b').css("display", "block");
    });
    $('.b').mouseleave(function(){
        $('.b').css("display","none");
    });
    $('.item2').mouseenter(function(){
        $('.c').css("display","block");
    });
    $('.item2').mouseleave(function(){
        $('.c').css("display","none");
    });
    $('.c').mouseenter(function(){
        $('.c').css("display", "block");
    });
    $('.c').mouseleave(function(){
        $('.c').css("display","none");
    });

    $('.item3').mouseenter(function(){
        $('.d').css("display","block");
    });
    $('.item3').mouseleave(function(){
        $('.d').css("display","none");
    });
    $('.d').mouseenter(function(){
        $('.d').css("display", "block");
    });
    $('.d').mouseleave(function(){
        $('.d').css("display","none");
    });

    $('.item4').mouseenter(function(){
        $('.e').css("display","block");
    });
    $('.item4').mouseleave(function(){
        $('.e').css("display","none");
    });
    $('.e').mouseenter(function(){
        $('.e').css("display", "block");
    });
    $('.e').mouseleave(function(){
        $('.e').css("display","none");
    });

    $('.item5').mouseenter(function(){
        $('.f').css("display","block");
    });
    $('.item5').mouseleave(function(){
        $('.f').css("display","none");
    });
    $('.f').mouseenter(function(){
        $('.f').css("display", "block");
    });
    $('.f').mouseleave(function(){
        $('.f').css("display","none");
    });

    $('.item6').mouseenter(function(){
        $('.g').css("display","block");
    });
    $('.item6').mouseleave(function(){
        $('.g').css("display","none");
    });
    $('.g').mouseenter(function(){
        $('.g').css("display", "block");
    });
    $('.g').mouseleave(function(){
        $('.g').css("display","none");
    });
});

export default Banner;