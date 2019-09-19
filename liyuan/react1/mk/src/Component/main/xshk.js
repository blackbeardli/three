import React, {Component} from "react";
import Module from "../module/module";
import './css/xshk.css';
const list1 = [
    //1
    {
        courselabel:'React.Js',
        courselabel1:'Vue.Js',
        coursecardname:"前端要学的测试课 从Jest入门到 TDD/BDD双实战",
        imgurl:'./img/30.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:1169,
        price:'￥288.00',
        xing:'xing',
    },
    //2
    {
        coursestat:'新课',
        courselabel:'java',
        coursecardname:"Java并发编程精讲",
        imgurl:'./img/31.png',
        span1:"实战",
        span2:"中级",
        imv2setsns:116,
        price:'￥298.00',
        price1:'￥348.00',
        salestip:'限时优惠',
        xing:'xing',
    },
    //3
    {
        courselabel:'算法',
        courselabel1:'算法与结构',
        coursecardname:"玩转算法系列--图论精讲  面试升职必备（java版）",
        imgurl:'./img/32.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:447,
        price:'￥399.00',
        xing:'xing',
    },
    //4
    {
        coursestat:'新课',
        courselabel:'Vue.js',
        courselabel1:'小程序',
        coursecardname:"零基础入门 实战mpvue2.0多端小程序框架",
        imgurl:'./img/33.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:65,
        price:'￥255.00',
        price1:'￥299.00',
        salestip:'限时优惠',
        xing:'xing',
    },
    //5
    {
        coursestatupgrade:'升级',
        courselabel:'微服务',
        courselabel1:'Spring Cloud',
        coursecardname:"基于Spring Cloud微服务架构  广告系统设计与实现",
        imgurl:'./img/34.png',
        span1:"实战",
        span2:"中级",
        imv2setsns: 1483,
        price:'￥236.00',
        xing:'xing',

    },
    //6
    {
        coursestat:'新课',
        courselabel:'ioS',
        courselabel1:'Vue.js',
        coursecardname:"混合开发入门 主流开发方案实战京东移动端APP",
        imgurl:'./img/35.png',
        span1:"实战",
        span2:"中级",
        imv2setsns:1169,
        price:'￥288.00',
        price1:'￥348.00',
        salestip:'限时优惠',
        xing:'xing',
    },
    //7
    {
        courselabel:'Java',
        courselabel1:'算法与数据结构',
        coursecardname:"剑指Java面试-Offer直通车",
        imgurl:'./img/36.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:116,
        price:'￥298.00',
        xing:'xing',
    },
    //8
    {
        courselabel:'接口测试',
        coursecardname:"Python接口自动化测试框架实战 从设计到开发",
        imgurl:'./img/37.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:447,
        price:'￥399.00',
        xing:'xing',
    },
    //9
    {
        coursestat:'新课',
        courselabel:'Aws',
        courselabel1:'Docker',
        coursecardname:"AWS summit 2019精华：关于人工智能、应用程序开发、DevOps",
        imgurl:'./img/38.png',
        span1:"入门",
        imv2setsns:65,
        price:'免费',
    },
    //10
    {
        coursestatupgrade:'升级',
        courselabel:'Springboot',
        courselabel1:'ssm',
        coursecardname:"Java主流技术栈SSM+SpringBoot商铺系统(升级更新)",
        imgurl:'./img/39.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns: 1483,
        price:'￥236.00',
        xing:'xing',

    }

];
const h1=[
    {
        span1:'tit-icon icon-new-l tit-icon-l',
        span2:'tit-icon icon-new-r tit-icon-r',
        em1:'新',
        em2:'上',
        em3:'好',
        em4:'课',
    }
];

class Xshk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list1:list1,
            h1:h1,
            // list1:list1,
            // list2:list2,
            // list3:list3,
            // list4:list4,
            // list5:list5,
            // list6:list6,
            // list7:list7,
            // list8:list8,
            // list9:list9,
        };
    }
    render() {
        return (


                        <Module list1={list1} h1={h1}/>

        );
    }
}

export default Xshk;