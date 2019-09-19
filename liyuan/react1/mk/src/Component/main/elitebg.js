import React, {Component} from "react";
import './css/elitebg.css';
import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import Module from "../module/module";
import Elitebg1 from "../module/elitebg1";
const list1=[
    //1
    {
        img:'./img/500.jpg',
        lecturername:'7七月',
        lecturertitle:'全栈工程师',
        lecturerp:'十年研发及团队管理经验，对程序员面临的各种问题深有体会；\n' +
            '                                精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。\n' +
            '                                课程讲解深入浅出，极为擅长培养学生的编程思维。',
    },
    //2
    {
        img:'./img/501.jpg',
        lecturername:'廖师兄',
        lecturertitle:'JAVA开发工程师',
        lecturerp:'载着干货的老司机。微服务，分布式架构方面经验丰富。',
    },
    //3
    {
        img:'./img/502.jpg',
        lecturername:'liuyubobobo',
        lecturertitle:'全栈工程师',
        lecturerp:'创业者，全栈工程师，持续学习者。\n' +
            '                                对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；\n' +
            '                                拥有多款独立App作品；\n' +
            '                                对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。',
    },
    //4
    {
        img:'./img/503.jpg',
        lecturername:'慕课官方号',
        lecturertitle:'页面重构设计',
        lecturerp:'慕课，Massive（大规模）Open（开放）\n' +
            '                                Online（在线）Course（课程）。\n' +
            '                                专注做好IT技能教育的MOOC，符合互联网发展潮流接地气儿的MOOC。\n' +
            '                                我们有更多免费资源，我们只教有用的，我们专心做教育。',
    },
    //5
    {
        img:'./img/504.jpg',
        lecturername:'Oeasy',
        lecturertitle:'页面重构设计',
        lecturerp:'他，授课风趣幽默，激情四射，自称屌丝青年，\n' +
            '                                中国传媒大学计算机教师；他，专注于网页制作、平面设计、\n' +
            '                                多媒体等多个领域的软件以及应用的挖掘与创新，热爱分享，\n' +
            '                                是新鲜热门软件和应用的导航标，他就是众粉丝心中的“Oeasy老湿”',
    },
];
const list2=[
  //  1
  {
    img:'./img/505.jpg',
        lecturername:'Stannum',
    lecturertitle:'软件工程师',
    lecturerp:'目前在财经界俗称的“大摩”，一家成立于美国纽约的国际金融服务公司-摩根士丹利担任软件工程师和敏捷开发专家。\n' +
'                                主攻Event Sourcing架构模式的应用。是一个“只有男同事,\n' +
'                                没有女同事”的程序媛一枚,先后就职于多家投资银行，\n' +
'                                负责开发“每一个bug都很贵”的内部交易系统,主导了股票交易执行系统和衍生品交易风险控制系统.',
  },
//    2
    {
        img:'./img/506.jpg',
        lecturername:'谢成',
        lecturertitle:'全栈工程师',
        lecturerp:'十年研发工作经验，大型公司任高级项目经理及金牌内训讲师，具有丰富的企业面试经验及带团队的经验，个人主导了多个重大项目的研发工作。\n' +
            '                                在Java、NodeJS、JavaScript、HTML5、CSS3、VueJs、ReactJs、\n' +
            '                                前端工程化、前端架构等方面均有建树。在教学过程中，把工作中所遇到的问题及重点融入到课程体系当中，\n' +
            '                                注重培养学生分析问题及解决问题的能力。',
    },
    //3
    {
        img:'./img/507.jpg',
        lecturername:'悟空',
        lecturertitle:'JAVA开发工程师',
        lecturerp:'硕士毕业于世界排名Top 9的慕尼黑工业大学\n' +
            '                                （计算机学科排名），国内毕业于同济大学，成绩专业排名Top 1，\n' +
            '                                获公派留学全额奖学金，现就职于一线明星互联网公司。课程深入浅出、系统全面、通俗易懂、干货满满。\n' +
            '                                讲课时充满热情，声情并茂，全程无废话，生动有趣',
    },
    //4
    {
        img:'./img/508.jpg',
        lecturername:'hyman',
        lecturertitle:'移动开发工程师',
        lecturerp:'同大千攻城狮般无异，本狮有着巨大的火热的不灭的技术热情，\n' +
            '                                痴迷于Android开发。乐于分享，善于将技术生活化，\n' +
            '                                唯愿与大千男女攻城狮共同进步',
    },
    //5
    {
        img:'./img/509.jpg',
        lecturername:'LGD_Sunday',
        lecturertitle:'全栈工程师',
        lecturerp:'6年前端、移动端开发经验，在WEB、Android、IOS领域有独特的见解，\n' +
            '                                统筹过的多个项目用户数已过千万，曾就职国内一线互联网公司，目前成立个人开发工作室。致力于研究大前端技术知识，\n' +
            '                                曾为多家互联网公司培训大前端技术，并受邀参加\n' +
            '                                Google 中国技术分享会，擅长引导学生从本质到思想再到具体解决方案过渡。',
    },

];
class Elitebg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1:list1,
            list2:list2,

        };
    }
    componentDidMount() {
         new Swiper('.lecturer-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,

            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
            },
        });
    }

    render() {
        return (
            <div className="elite-bg">
                <div className="container-types container-teacher-types clearfix">
                    <h3 className="types-title">
                        <span className="tit-icon icon-teacher-l tit-icon-l"> </span>
                        <em>慕</em>
                        /
                        <em>课</em>
                        /
                        <em>精</em>
                        /
                        <em>英</em>
                        /
                        <em>名</em>
                        /
                        <em>师</em>

                        <span className="tit-icon icon-teacher-r tit-icon-r"></span>
                        <a href="#" className="types-title-more">
                            <span>查看更多</span>
                            <i className="imv2-arrow2_r"></i>
                        </a>
                    </h3>
                                           {/*轮播图*/}
                    <div className="lecturer-container js-lecturer-container swiper-container-horizontal">
                        <Elitebg1 list1={list1} list2={list2}/>

                                              {/*左按钮*/}
                        <div className="slider-prev icon-left2"></div>
                                               {/*右按钮*/}
                        <div className="slider-next icon-right2"></div>
                                            {/*下按钮*/}
                        <div className="slider-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <span className="swiper-pagination-bullet"></span>
                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                        </div>
                    </div>
                </div>
            </div>


    );
    }
}
// var swiper = new Swiper('.lecturer-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//
//     autoplay: {
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.slider-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.slider-next',
//         prevEl: '.slider-prev',
//     },
// });
// $('.swiper-slide').mouseenter(function () {
//     swiper.autoplay.stop();
// });
// $('.swiper-slide').mouseleave(function () {
//     swiper.autoplay.start();
// });
export default Elitebg;