import React, { Component } from 'react';
import './css/nav.css';
class Nav extends Component {
    render() {
        return (
                <ul className="nav-item">
                    <li><a href="#">免费课程</a></li>
                    <li><a href="#">实战课程</a></li>
                    <li><a href="#">就业班</a></li>
                    <li><a href="#">专栏<i className="icn-new"></i></a></li>
                    <li><a href="#">猿问</a></li>
                    <li><a href="#">手记</a></li>
                </ul>
        );
    }
}
export default Nav;