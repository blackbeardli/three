import React, {Component} from "react";
class Yuanwen extends Component {
    render() {
        return (
            <dd className="item" style={this.props.item.wz}>
                <label className="wenda-label green">
                    <i className="icon-yuanwen"></i>
                    {this.props.item.iconyuanwen}
                </label>
                <a href="#" className="wenda-tit">
                    {this.props.item.wendatit}
                </a>
                <div>
                    {this.props.item.bestlabel ?
                        <p className="best-label">{this.props.item.bestlabel}</p>:null}
                    {this.props.item.wendacontent ?
                        <p className="wenda-content">{this.props.item.wendacontent}</p>:null}
                    <div className="bottom-info clearfix">
                        <a href="#" className="r green">
                            {this.props.item.rgreen}
                            <i className="icon-right"></i>
                        </a>
                    </div>
                </div>
            </dd>
        );
    }
}

export default Yuanwen;