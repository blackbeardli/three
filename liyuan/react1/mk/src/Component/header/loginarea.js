import React, { Component } from 'react';
import './css/loginarea.css';
import $ from 'jquery';
class Logoinarea extends Component {
    render() {
        return (
            <div className="login-area">
                <ul className="header-unlogin clearfix">
                    <li className="app-download">
                        <a href="#" style={{width: "60px"}}>下载APP</a>
                        <div className="app-load-box clearfix js-load-box" style={{display: "none"}}>
                            <div className="mob-load-box">
                                <h4>慕课网APP - 随时随地学编程</h4>
                                <img src="./img/200.png" alt="" className="l"/>
                                    <div className="r">
                                        <a href="#" className="app-load-btn">
                                            <i className="icon-apple"></i>
                                            APP Store 下载
                                        </a>
                                        <a href="#" className="app-load-btn">
                                            <i className="icon-android"></i>
                                            Android下载
                                        </a>
                                        <p>扫描下载慕课网APP</p>
                                    </div>
                            </div>
                        </div>
                    </li>
                    <li className="shop-cart">
                        <a href="#" className="shop-cart-icon">
                            <span className="icon-shopping-cart js-endcart"></span>
                            <span className="s1">购物车</span>
                            <span className="shopping_icon js-cart-num" data-ordernum="0" data-cartrnum="0"
                                  style={{display: "none"}}>0</span>
                        </a>
                        <div className="my-cart clearfix">
                            <div className="cart-title-box clearfix">
                                <h2 className="l">我的购物车</h2>
                                <h5 className="r">
                                    已加入
                                    <span className="js-incart-num">0</span>
                                    门课程
                                </h5>
                            </div>
                            <div className="cart-wrap">
                                <div className="clear-cart">
                                    <span className="cartIcon icon-shopping-cart"></span>
                                    <h3>购物车里空空如也</h3>
                                    <div className="text">快去这里选购你中意的课程</div>
                                    <p>
                                        <a href="#" className="go-link">实战课程</a>
                                    </p>
                                    <p>
                                        <a href="#" className="go-link">就业班</a>
                                    </p>
                                </div>
                            </div>
                            <div className="more-box clearfix">
                                <div className="l show-box">
                               <span className="text">
                                  <a href="#">我的订单中心</a>
                               </span>
                                </div>
                                <a href="#" className="r moco-btn moco-btn-red go-cart">去购物车</a>
                            </div>
                        </div>
                    </li>
                    <li className="header-signin">
                        <a href="#" id="js-signin-btn">登录</a>
                        /
                        <a href="#" id="js-signup-btn">注册</a>
                    </li>
                </ul>
            </div>
    );
    }
}

$(function(){

    $('.shop-cart').mouseenter(function(){
        $('.shop-cart .shop-cart-icon span').css("color","red");
    });
    $('.shop-cart').mouseleave(function(){
        $('.shop-cart .shop-cart-icon span').css("color","#71777d");
    });
    $('.my-cart').mouseenter(function(){
        $ ('.my-cart').css("display","block");
    });
});
export default Logoinarea;