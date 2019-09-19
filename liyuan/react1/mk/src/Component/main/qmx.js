import React, {Component} from "react";
import './css/qmx.css';
import $ from 'jquery';
import Qmx1 from "../module/qmx1";
import Qmx2 from "../module/qmx2";
const l1 = [
    //1
    {
        imgurl:'./img/81.jpg',
        leaditemname:'小星星醒醒',
        leaditemtit:'风骚课程学霸',
        color:'purple',
    },
//    2

    {
        imgurl:'./img/82.jpg',
        leaditemname:'ibeautiful',
        leaditemtit:'智慧文章王者',
        color:'blue',


    },

    //3
    {
        imgurl:'./img/83.png',
        leaditemname:'we1231',
        leaditemtit:'慕课第一土豪',
        color:'yellow',


    }
];

const list1 = [
    //1
    {
        imgurl:'./img/91.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p1',
        div:'div1',



    },
    //2
    {
        imgurl:'./img/92.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p2',
        div:'div2',

    },

    //3
    {
        imgurl:'./img/93.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p3',
        div:'div3',


    },

    //4
    {
        imgurl:'./img/94.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p4',
        div:'div4',


    },

    //5
    {
        imgurl:'./img/95.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p5',

        div:'div5',


    },

    //6
    {
        imgurl:'./img/96.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p6',

        div:'div6',


    },

    //7
    {
        imgurl:'./img/97.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p7',

        div:'div7',


    },

    //8
    {
        imgurl:'./img/98.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p8',

        div:'div8',


    },

    //9
    {
        imgurl:'./img/99.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p9',

        div:'div9',

    },

// 10
    {
        imgurl:'./img/105.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p10',

        div:'div10',


    },

    //11
    {
        imgurl:'./img/106.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue marr0 p11',
        div:'div11',


    },

//12
    {
        imgurl:'./img/107.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue marl0 p12',
        div:'div12',

    },

    //13
    {
        imgurl:'./img/108.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item blue p13',
        div:'div13',

    },

    //14
    {
        imgurl:'./img/109.jpg',
        title:'="风骚课程学霸"=',
        nickname:'悬崖上的金魚姬',
        desc:'一周获得 69积分',
        cur1:'◆',
        dd:'other-item purple p14',
        div:'div14',

    },

];

class Qmx extends Component {
    constructor(props) {
        super(props);
        this.state = {
           l1:l1,
            list1:list1,

        };
    }
    render() {
        return (
            <div className="container-types clearfix">
                <h3 className="types-title">
                    <span className="tit-icon icon-star-l tit-icon-l"> </span>
                    <em>吊</em>
                    /
                    <em>炸</em>
                    /
                    <em>天</em>
                    /
                    <em>全</em>
                    /
                    <em>明</em>
                    /
                    <em>星</em>
                    <span className="tit-icon icon-star-r tit-icon-r"></span>
                </h3>
                <div className="star-list clearfix">
                    <dl className="lead-list clearfix js-lead-list">
                        {this.state.l1.map(item =>
                            <Qmx1 item={item}/>
                        )}
                    </dl>

                    <dl className="other-list clearfix js-other-list">
                        {/*1*/}
                        {this.state.list1.map(item =>
                            <Qmx2 item={item}/>
                        )}


                    </dl>
                </div>
            </div>

        );
    }
}
$(function(){
$('.p1').mouseenter(function(){
    $('.div1').css("display","block");
});
$('.p1').mouseleave(function(){
    $('.div1').css("display","none");
});
$('.p2').mouseenter(function(){
    $('.div2').css("display","block");
});
$('.p2').mouseleave(function(){
    $('.div2').css("display","none");
});

$('.p3').mouseenter(function(){
    $('.div3').css("display","block");
});
$('.p3').mouseleave(function(){
    $('.div3').css("display","none");
});

$('.p4').mouseenter(function(){
    $('.div4').css("display","block");
});
$('.p4').mouseleave(function(){
    $('.div4').css("display","none");
});

$('.p5').mouseenter(function(){
    $('.div5').css("display","block");
});
$('.p5').mouseleave(function(){
    $('.div5').css("display","none");
});

$('.p6').mouseenter(function(){
    $('.div6').css("display","block");
});
$('.p6').mouseleave(function(){
    $('.div6').css("display","none");
});
$('.p7').mouseenter(function(){
    $('.div7').css("display","block");
});
$('.p7').mouseleave(function(){
    $('.div7').css("display","none");
});

$('.p8').mouseenter(function(){
    $('.div8').css("display","block");
});
$('.p8').mouseleave(function(){
    $('.div8').css("display","none");
});

$('.p9').mouseenter(function(){
    $('.div9').css("display","block");
});
$('.p9').mouseleave(function(){
    $('.div9').css("display","none");
});

$('.p10').mouseenter(function(){
    $('.div10').css("display","block");
});
$('.p10').mouseleave(function(){
    $('.div10').css("display","none");
});

$('.p11').mouseenter(function(){
    $('.div11').css("display","block");
});
$('.p11').mouseleave(function(){
    $('.div11').css("display","none");
});

$('.p12').mouseenter(function(){
    $('.div12').css("display","block");
});
$('.p12').mouseleave(function(){
    $('.div12').css("display","none");
});

$('.p13').mouseenter(function(){
    $('.div13').css("display","block");
});
$('.p13').mouseleave(function(){
    $('.div13').css("display","none");
});

$('.p14').mouseenter(function(){
    $('.div14').css("display","block");
});
$('.p14').mouseleave(function(){
    $('.div14').css("display","none");
});

});
export default Qmx;