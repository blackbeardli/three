import React, {Component} from "react";
class Qmx2 extends Component {
    render() {
        return (
            <dd className={this.props.item.dd}>
                <a href="#">
                    <img src={this.props.item.imgurl} alt=""/>
                    <div className={this.props.item.div} style={{display: "none"}}>
                        <p className="title">{this.props.item.title}</p>
                        <p className="nickname">{this.props.item.nickname}</p>
                        <p className="desc">{this.props.item.desc}</p>
                        <span className="cur">{this.props.item.cur1}</span>
                    </div>
                </a>
            </dd>
        );
    }
}

export default Qmx2;