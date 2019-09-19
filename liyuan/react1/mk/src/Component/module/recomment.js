import React, {Component} from "react";
class Recomment extends Component {
    render() {
        return (
            <div className="l banner-course-card">
                <a href="#" title="OpenCV+TensorFlow 入门人工智能图像处理" className="clearfix">
                    {this.props.item.img ?
                        <img src={this.props.item.img} alt="" className="l"/>:null}
                    <div className="l course-card">
                        <h3 className="course-card-name">{this.props.item.coursecardname}</h3>
                        {this.props.item.coursecardprice ?
                        <div className="course-card-price l">{this.props.item.coursecardprice}</div>:null}
                        {this.props.item.dian ?
                        <div className="course-card-dot l">
                            <i className="imv2-dot_samll"></i>
                        </div>:null}
                        <div className="course-card-info l">
                            {this.props.item.coursecardinfo}
                        </div>
                        <div className="course-card-dot l">
                            <i className="imv2-dot_samll"></i>
                        </div>

                        <div className="course-card-info l">
                            <i className="icon-set_sns"></i>
                            {this.props.item.iconsetsns}
                        </div>
                    </div>
                </a>
            </div>

        );
    }
}

export default Recomment;