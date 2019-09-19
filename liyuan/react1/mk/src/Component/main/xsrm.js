import React, {Component} from "react";
import './css/xsrm.css';
import Module from "../module/module";
const listt1 = [
    {
        h3:'站在微信小程序风口，实现职业华丽转身',
        p:'入门技能+项目开发，逐步深入学习小程序开发',
        img1:{background:"url(./img/99.png) no-repeat center center",backgroundsize: "100%"},

    },
    {
        h3:'盘点最主流的前端框架有哪些？',
        p:'上万人的选择打消你对主流框架的疑惑',
        img1:{background:"url(./img/100.jpg) no-repeat center center",backgroundsize: "100%"}
    }

];

const list1 = [
    //111
    // {
    //     h3:'站在微信小程序风口，实现职业华丽转身',
    //     p:'入门技能+项目开发，逐步深入学习小程序开发',
    //     img1:{background:"url(./img/99.png) no-repeat center center",backgroundsize: "100%"},
    //
    // },
    // //222
    // {
    //     h3:'盘点最主流的前端框架有哪些？',
    //     p:'上万人的选择打消你对主流框架的疑惑',
    //     img1:{background:"url(./img/100.jpg) no-repeat center center",backgroundsize: "100%"}
    // },
    //1
    {
        courselabel:'java攻城狮计划',
        img:{backgroundImage: "url(./img/41.jpg)"},
        coursecardname:'java 零基础入门',
        span1:'就业班',
        span2:'3步/28课',
        imv2setsns:1557,
        price:'￥567.00',
    },
    //2
    {
        courselabel:'web前端攻城狮计划',
        img:{backgroundImage: "url(./img/42.jpg)"},
        coursecardname:'前端零基础入门',
        span1:'就业班',
        span2:'3步/28课',
        imv2setsns:1557,
        price:'￥568.00',
    },
    //3
    {
        courselabel:'php攻城狮计划',
        img:{backgroundImage: "url(./img/43.jpg)"},
        coursecardname:'PHP小白零基础入门',
        span1:'就业班',
        span2:'3步/28课',
        imv2setsns:1557,
        price:'￥568.00',
    },
    //4
    {
        courselabel:'Ptony',
        courselabel1:'爬虫',
        coursecardname:"玩转算法系列--图论精讲  面试升职必备（java版）",
        imgurl:'./img/46.jpg',
        span1:"实战",
        span2:"中级",
        imv2setsns:447,
        price:'￥399.00',
        xing:'xing',

    },
    //5
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
    //6
    {
        courselabel:'Python攻城狮计划',
        img:{backgroundImage: "url(./img/44.jpg)"},
        coursecardname:'Python 零基础入门',
        span1:'就业班',
        span2:'3步/28课',
        imv2setsns:1557,
        price:'￥568.00',
    },
    //7
    {
        courselabel:'Anridor',
        coursecardname:"Flutter入门与案例实战",
        imgurl:'./img/47.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },
    //8
    {
        courselabel:'Anodirs攻城狮计划',
        img:{backgroundImage: "url(./img/45.jpg)"},
        coursecardname:'Anodirs 零基础入门',
        span1:'就业班',
        span2:'3步/28课',
        imv2setsns:1557,
        price:'￥568.00',
    },
    //9
    {
        courselabel:'小程序',
        coursecardname:"轻松入门小程序和微信开发和云开发",
        imgurl:'./img/48.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },
    //10
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
    }

];
const h1=[
    {
        span1:'tit-icon icon-job-l tit-icon-l',
        span2:'tit-icon icon-job-r tit-icon-r',
        em1:'新',
        em2:'手',
        em3:'入',
        em4:'门',
    }
];


class Xsrm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           listt1:listt1,
            // listt2:listt2,
            list1:list1,
            // list2:list2,
            // list3:list3,
            // list4:list4,
            // list5:list5,
            // list6:list6,
            // list7:list7,
            // list8:list8,
            // list9:list9,
            // list10:list10,
        };
    }
    render() {
        return (
                    <Module list1={list1} listt1={listt1} h1={h1} />
        );
    }
}

export default Xsrm;