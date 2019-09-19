import React, {Component} from "react";
class Qmx1 extends Component {
    render() {
        return (
            <dd>
                <div className="lead-item-photo">
                    <a href="#">
                        <img src={this.props.item.imgurl} alt=""/>
                    </a>
                    <span className={this.props.item.color}></span>
                </div>
                <p className="lead-item-name ellipsis">{this.props.item.leaditemname}</p>
                <p className="lead-item-tit">{this.props.item.leaditemtit}</p>
            </dd>
        );
    }
}

export default Qmx1;