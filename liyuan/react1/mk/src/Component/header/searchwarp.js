import React, { Component } from 'react';
import $ from 'jquery';
import './css/searchwarp.css';
class Searchwarp extends Component {
    render() {
        return (
            <div className="search-warp clearfix" style={{minwidth: "32px", height:"72px"}}>
                <div className="search-area" data-search="top-banner">
                    <input type="text" className="search-input" data-suggest-trigger="suggest-trigger"
                           autoComplete="off"/>
                </div>
                <div className="showhide-search" data-show="no">
                    <i className="icon-search"></i>
                </div>
            </div>

    );
    }
}
$(function(){
    $('input').focus(function(){
        $('.search-area').css("border-bottom-color","red");
        $('.search-warp .showhide-search').css("background","rgba(240,20,20,0.4)");
    });
    $('input').blur(function(){
        $ ('.search-area').css("border-bottom-color","#D9DDE1");
        $('.search-warp .showhide-search').css("background","");
    });
})

export default Searchwarp;