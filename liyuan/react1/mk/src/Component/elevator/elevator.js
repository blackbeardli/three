import React, {Component} from "react";
import $ from 'jquery';
import './css/elevator.css';
class Elevator extends Component {
    render() {
        return (
            <div className="elevator">
                <a href="#" className="elevator-msg">
                    <i className="icon-feedback"></i>
                    <span>意见反馈</span>
                </a>
                <a href="#" className="elevator-dist">
                    <i></i>
                    <span>邀请有奖</span>
                </a>
                <a href="#" className="elevator-faq">
                    <i className="icon-ques"></i>
                    <span>帮助中心</span>
                </a>
                <a href="#" className="elevator-app">
                    <i className="icon-appdownload"></i>
                    <span>APP下载</span>
                    <div className="elevator-app-box"></div>
                </a>
                <a href="#" className="elevator-weixin">
                    <i className="icon-wxgzh"></i>
                    <span>官方微信</span>
                    <div className="elevator-weixin-box"></div>
                </a>
                <a href="#" className="elevator-top no-goto " style={{display:"none"}}>
                    <i className="icon-up2"></i>
                    <span>返回顶部</span>
                </a>
            </div>

        );
    }
}
window.onscroll = function scrollFunction() {
    if (document.documentElement.scrollTop > 1500) {
        $('.elevator-top').css("display","block");
    } else {
        $(".elevator-top").css("display","none");
    }
};
export default Elevator;