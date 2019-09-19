import React, {Component} from "react";
import Logo from "./Logo";
import Nav from "./nav";
import Logoinarea from "./loginarea";
import Searchwarp from "./searchwarp";
import './css/header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="page-container clearfix aadZ-index" style={{background: "#fff"}}>
                    <Logo/>
                    <Nav/>
                    <Logoinarea/>
                    <Searchwarp/>
                </div>
            </div>
        );
    }
}

export default Header;