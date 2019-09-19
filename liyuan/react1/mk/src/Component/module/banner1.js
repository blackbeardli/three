import React, {Component} from "react";
class Banner1 extends Component {
    render() {
        return (
            <div className={this.props.item.div} data-id={this.props.item.id}>
                <a href="#">
                    <span className="group">{this.props.item.span}</span>
                    <i className="imv2-arrow1_r"></i>
                </a>
            </div>
        );
    }
}

export default Banner1;