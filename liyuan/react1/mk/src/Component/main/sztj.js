import React, {Component} from "react";
import './css/sztj.css';
import Module from "../module/module";
const list1 = [
    {
    courselabel:'Node.js',
    coursecardname:"s从零开发Web Server博客项目 前端晋升全栈工程师必备",
    imgurl:'./img/21.jpg',
    span1:"实战",
    span2:"中级",
    imv2setsns:1169,
    price:'￥288.00',
        xing:'xing',

    },
    {
        coursestat:'新课',
        courselabel:'Node.js',
        courselabel1:'小程序',
        coursecardname:"微信小程序云开发-从0打造云音乐全栈小程序",
        imgurl:'./img/22.png',
        span1:"实战",
        span2:"中级",
        imv2setsns:116,
        price:'￥298.00',
        price1:'￥348.00',
        salestip:'限时优惠',
        xing:'xing',

    },
    {
        courselabel:'SpringBoot',
        courselabel1:'Spring Cloud',
        coursecardname:"Spring Cloud Alibaba微服务从入门到进阶",
        imgurl:'./img/23.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:447,
        price:'￥399.00',
        xing:'xing',


    },
    {
        coursestat:'新课',
        courselabel:'Java',
        coursecardname:"一站式学习Java网络编程 全面理解BIO/NIO/AIO",
        imgurl:'./img/24.png',
        span1:"实战",
        span2:"中级",
        imv2setsns:65,
        price:'￥255.00',
        price1:'￥299.00',
        salestip:'限时优惠',
        xing:'xing',

    },
    {
        coursestathot:'热门',
        courselabel:'计算机网络',
        coursecardname:"编程必备基础知识 计算机组成原理+操作系统+计算机网络",
        imgurl:'./img/25.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns: 1483,
        price:'￥236.00',
        xing:'xing',


    }

];
const h1=[
    {
        span1:'tit-icon icon-shizhan-l tit-icon-l',
        span2:'tit-icon icon-shizhan-r tit-icon-r',
        em1:'实',
        em2:'战',
        em3:'推',
        em4:'荐',
    }
];

class Sztj extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list1:list1,
            h1:h1,
            // list1:list1,
            // list2:list2,
            // list3:list3,
            // list4:list4,
        };
    }
    render() {
        return (



                            <Module list1={list1} h1={h1}/>
                     );
    }
}

export default Sztj;