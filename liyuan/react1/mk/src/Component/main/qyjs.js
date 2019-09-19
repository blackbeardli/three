import React, {Component} from "react";
import './css/qyjs.css';
import Module1 from "../module/module1";
import Module from "../module/module";
const listt1 = [
    {
        h3:'慕课微课',
        p:'超值课程最低一元体验',
        img1:{background:"url(./img/103.jpg) no-repeat center center",backgroundsize: "100%"},

    },
    {
        h3:'改变职场命运，修炼全栈工程师的必修课',
        p:'从入门到开发，学习 好玩 好用',
        img1:{background:"url(./img/104.jpg) no-repeat center center",backgroundsize: "100%"}
    },
];

const list1 = [
    // //111
    // {
    //     h3:'慕课微课',
    //     p:'超值课程最低一元体验',
    //     img1:{background:"url(./img/103.jpg) no-repeat center center",backgroundsize: "100%"},
    //
    // },
    // //222
    // {
    //     h3:'改变职场命运，修炼全栈工程师的必修课',
    //     p:'从入门到开发，学习 好玩 好用',
    //     img1:{background:"url(./img/104.jpg) no-repeat center center",backgroundsize: "100%"}
    // },
    //1
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
    //2
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

    //3
    {
        courselabel:'小程序',
        coursecardname:"轻松入门小程序和微信开发和云开发",
        imgurl:'./img/48.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },

    //4
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
    //5

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

    //6
    {
        courselabel:'小程序',
        coursecardname:"轻松入门小程序和微信开发和云开发",
        imgurl:'./img/48.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },
     // 7

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

    //8
    {
        courselabel:'小程序',
        coursecardname:"轻松入门小程序和微信开发和云开发",
        imgurl:'./img/48.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },
       //   9
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
//    10

    {
        courselabel:'小程序',
        coursecardname:"轻松入门小程序和微信开发和云开发",
        imgurl:'./img/48.jpg',
        span1:"入门",
        imv2setsns: 65,
        price:'免费',
    },
];
const h1=[
    {
        span1:'tit-icon icon-tech-l tit-icon-l',
        span2:'tit-icon icon-tech-r tit-icon-r',
        em1:'前',
        em2:'沿',
        em3:'技',
        em4:'术',
    }
];
class Qyjs extends Component {
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
                    <Module list1={list1} listt1={listt1} h1={h1}/>

        );
    }
}

export default Qyjs;