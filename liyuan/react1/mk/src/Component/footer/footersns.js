import React, { Component } from 'react';
import $ from 'jquery';
import './css/footersns.css';
class Footersns extends Component {
    render() {
        return (
            <div className="footer-wrap idx-width">
                <div className="footer-sns clearfix">
                    <div className="l">
                        <a href="#" className="footer-sns-weixin" target="_blank" title="微信">
                            <i className="footer-sns-weixin-expand" style={{display: "none"}}></i>
                        </a>
                        <p>官方公众号</p>
                    </div>
                    <div className="l">
                        <a href="#" className="footer-sns-weibo hide-text" target="_blank" title="新浪微博"></a>
                        <p>官方微博</p>
                    </div>
                </div>
            </div>
        );
    }
}
$(function(){
    $('.footer-sns-weixin').mouseenter(function(){
        $('.footer-sns-weixin-expand').css("display","block");
    });
    $('.footer-sns-weixin').mouseleave(function(){
        $('.footer-sns-weixin-expand').css("display","none");
    });
});

export default Footersns;