import React, {Component} from "react";

class Innerbox1 extends Component {

    render() {
        return (
            <div className="innerBox clearfix">
                <div className="subinnerBox">
                    <div className="cates-box">
                        <div className="fe-base-box clearfix">
                            <div className="banner-line">
                                    <span className="bold mr10 l small-title">{this.props.item.span1}</span>
                            </div>
                            {/*隐藏区域1*/}
                                <div className="tag-box l">
                                    {this.props.item.a1.map(function (item) {
                                        return <a href="#">{item}</a>
                                    })}
                                </div>
                        </div>
                        {this.props.item.span2 ?
                        <div className="fe-base-box clearfix">
                            <div className="banner-line">
                                <span className="bold mr10 l small-title">{this.props.item.span2}</span>
                            </div>
                            {/*1隐藏区域*/}
                            <div className="tag-box l">
                                {this.props.item.a2.map(function (item) {
                                    return <a href="#">{item}</a>
                                })}
                            </div>
                        </div>:null}

                    </div>
                </div>
            </div>

        );
    }
}

export default Innerbox1;