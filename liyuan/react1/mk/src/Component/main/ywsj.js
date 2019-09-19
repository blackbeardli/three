import React, {Component} from "react";
import './css/ywsj.css';
import Shouji from "../module/shouji";
import Yuanwen from "../module/yuanwen";
const list1=[
    //1
    {
        articlelabel:'手记文章',
        bigtit:'【干货合辑】都2019年下半年了， 抓紧上车 ，今年新热技术都在这里！',
        imgurl:'./img/74.jpg',
        articlecontent:'互联网发展迅速，不进步就等于在落后，2019年前半年都要过去了，热门新技术你掌握了吗？ 还不知道该学什么怎么学？\n' +
            '                            别担心，小慕给大家整理了一篇各大方向的新技术学习干货，点赞收藏走起！ 前端方向 热门技术：TypeScript、Vue、微信小程序\n' +
            '                            干货文章： 《从今天开始，拿起 TypeScript 做一个轮子的制造者》\n' +
            '                            《TypeScript应该怎么学》 《TypeScript入门》 《TypeS...',
        span1:'浏览 122197',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"390px", top:"0px"},

    },
    //2
    {
        articlelabel:'手记文章',
        bigtit:'【前端学习路线】以企业需求为导向，看新手如何系统学习前端',
        imgurl:'./img/75.jpg',
        articlecontent:' 前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！\n' +
            '                             首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下   根据前端工程师技能点图，我们分为四个阶段：\n' +
            '                             第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...',
        span1:'浏览 122197',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"780px", top:"0px"},

    },

    //3
    {
        articlelabel:'手记文章',
        bigtit:'【面试技巧系列】找工作、涨薪、跳槽都得来一份',
        imgurl:'./img/76.jpg',
        articlecontent:'面试是程序员求职过程中最重要的一步 别以为面试技巧很虚 很多技术不错的人\n' +
            '                             恰恰输在了面试技巧上 知识点怎么复习、问题如何回答 怎么在面试时避免采坑、惊艳面试官 怎么与HR谈论薪资待遇…… 往往这些问题决定你能否成功应聘。 敲黑板划重点：\n' +
            '                             以下面试技巧神器你值得拥有！ 大量干货文章袭来预警~ 一、通用篇 干货文章： 聪明人喜欢这样写简历 如何有效地备战面试 【程序员】在面...',
        span1:'浏览 12297',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"780px", top:"361px"},

    },

    //4
    {
        articlelabel:'手记文章',
        bigtit:'【涨薪秘籍】安卓工程师的进阶实战之路',
        imgurl:'./img/77.jpg',
        articlecontent:'Android知识杂乱无章，不知道从哪入手？ 技术更新频繁，学不动了，从业者该何去何从？ 工作多年，年龄上升工资却迟迟不涨，危机感满满，该如何破解？ 是时候该开启你的安卓实战之路啦！\n' +
            '                             涨薪的奥秘都在这里！ 今天小慕给大家带来安卓三个阶段的学习路线，从项目入手，逐步深入的带你理解并掌握Android的核心技术，\n' +
            '                             帮助你成为具备高薪实力的Android开发者，顺利破解职场危机！ 不多说啦，上干货。 第一阶...',
        span1:'浏览 12297',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"390px", top:"385px"},

    },

    //  5
    {
        articlelabel:'手记文章',
        bigtit:'【React学习路线】从零进阶前端核心工程师',
        imgurl:'./img/78.jpg',
        articlecontent:' 哈喽，良心推荐小慕又来跟大家分享啦，今天分享的是React~ 面向工资编程，前端核心框架、加薪神器React了解一下！ React毫无疑问是前端界主流的框架，\n' +
            '                             而框架本身就是热点，可以说是前端工程师们能力提升、快速晋升高级开发工程师的必备技能。 还不知道如何入门？\n' +
            '                             技术提升遇到瓶颈？ 别担心，下面小慕就跟大家详细聊一下React的学习路线，入门到进阶的秘籍都在这里啦！\n' +
            '                             第一阶段：React快速入门 ...',
        span1:'浏览 12297',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"0px", top:"683px"},

    },

    //6
    {
        articlelabel:'手记文章',
        bigtit:'【干货推荐】java工程师从零进阶，大牛带你轻松上路',
        imgurl:'./img/79.jpg',
        articlecontent:'    java新手不知如何入门？ 经验多却面临上升瓶颈期？ 想进阶高级工程师还差点火候？\n' +
            '                             今天这波最实用的java实战之路 以战养兵 为你打通职业发展脉络 沿着Java大牛们的思路，\n' +
            '                             逐步成长为一名业务与思想同样优秀的Java开发者。 就业、晋升、管理均游刃有余！ 不多说了，上干货！\n' +
            '                             阅读指南：本文专为Java开发行业人员设计，分为四个阶段，循序渐进的带你进行SSM框架、SpringBoot框架、微服务...',
        span1:'浏览 12297',
        span2:'推荐 95',
        rblue:'阅读全文',
        wz1:{left:"780px", top:"722px"},

    },
];
const list11=[
    //1
    {
        iconyuanwen:'相关猿问',
        wendatit:'想学习自动化测试，应该具备哪些技能',
        rgreen:'共6个回答',
        wz:{left:"390px", top:"770px"},

    },
    //2
    {
        iconyuanwen:'相关猿问',
        wendatit:'【有奖问答】与大咖交流前端JS与框架开发，免费赢取前端图书（11.28-12.4）',
        bestlabel:'最赞回答',
        wendacontent:'我觉得不管学习哪门语言，到后面总还是要学习一下规范，程序员的素养必不可少啊！！',
        rgreen:'共6个回答',
        wz:{left:"390px", top:"928px"},

    },
    // 3
    {
        iconyuanwen:'相关猿问',
        wendatit:'各位猿或者媛，一般几点睡啊。有时忍住头痛看java到很晚，第二天就头痛一整天',
        bestlabel:'已采纳回答',
        wendacontent:'没有什么事情是需要熬夜完成的',
        rgreen:'共6个回答',
        wz:{left:"0px", top:"1068px"},

    },

//    4
    {
        iconyuanwen:'相关猿问',
        wendatit:'java好学吗.??pp',
        bestlabel:'最赞回答',
        wendacontent:'挺好的！',
        rgreen:'共6个回答',
        wz:{left:"780px", top:"1107px"},

    },
       //5
    {
        iconyuanwen:'相关猿问',
        wendatit:'话说，大家想编程的最初初衷是什么',
        bestlabel:'最赞回答',
        wendacontent:'说兴趣的话有没有人打我....！',
        rgreen:'共6个回答',
        wz:{left:"390px", top:"1187px"},

    }
];


class Ywsj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1:list1,
            list11:list11,

        };
    }
    render() {
        return (
            <div className="container-types">
                <h3 className="types-title">
                    <span className="tit-icon icon-art-l tit-icon-l"> </span>
                    <em>精</em>
                    /
                    <em>彩</em>
                    /
                    <em>手</em>
                    /
                    <em>记</em>
                    /
                    <em>及</em>
                    /
                    <em>猿</em>
                    /
                    <em>问</em>
                    <span className="tit-icon icon-art-r tit-icon-r"></span>
                </h3>
                <dl className="wonderful-list js-wonderful-list types-content" style={{height: "1401px"}}>
                    {/*1-左1*/}
                    <dd className="item" style={{left: "0px", top: "0px"}}>
                        <label className="topic-label">热门话题</label>
                        <div className="clearfix topic-period">
                            <a href="#" className="big-tit l">
                                #【内推第二波】
                                <br/>
                                    打工奋斗7万落京沪vs自主创业牧马城市，如何抉择？
                            </a>
                            <img src="./img/70.jpg" alt=""/>
                        </div>
                        <p className="topic-content">
                            毕业求职？跳槽加薪？纠结滋润加班还是苦练x年自主创业？速速提问互撩，
                            你在撩的极有可能就是你的Boss！激不激动？惊不惊喜？Offer已在这里！你的简历在哪里？
                            Scott老师邮箱：wolf18387@qq.comJeson老师邮箱：jeson@imoocc.com
                        </p>
                        <div className="bottom-info clearfix">
                            <a href="#" className="r green">
                                了解详情
                                <i className="icon-right"></i>
                            </a>
                        </div>
                        <div className="tit-line">
                            <span>往期回顾</span>
                        </div>
                        <div className="review-topic">
                            <div className="clearfix topic-period">
                                <a href="#" className="big-tit l">
                                    #【获奖名单戳查看更多】#
                                    <br/>
                                        当我们谈论Java时，我们都谈些什么？
                                </a>
                                <img src="./img/71.jpg" alt="" className="r"/>
                            </div>
                            <div className="clearfix topic-period">
                                <a href="#" className="big-tit l">
                                    #【内推第1波】#
                                    <br/>
                                        直击BAT面试机会！行业大佬在线答疑
                                </a>
                                <img src="./img/72.jpg" alt="" className="r"/>
                            </div>
                            <div className="clearfix topic-period">
                                <a href="#" className="big-tit l">
                                    #【花式填坑】第23期#
                                    <br/>
                                        运维进化篇：成为Python DevOps工程师有哪些必备条件？
                                </a>
                                <img src="./img/73.jpg" alt="" className="r"/>
                            </div>
                        </div>
                        <div className="bottom-info clearfix">
                            <a href="#" className="r green">
                                更多往期话题
                                <i className="icon-right"></i>
                            </a>
                        </div>
                    </dd>

                    {/*中*/}
                    {this.state.list1.map(item =>
                        <Shouji item={item}/>
                    )}

                    {/*3-中*/}
                    {this.state.list11.map(item =>
                        <Yuanwen item={item}/>
                    )}

                </dl>
            </div>




        );
    }
}

export default Ywsj;