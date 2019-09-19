import React, {Component} from "react";
class Shouji extends Component {
    render() {
        return (
            <dd className="item" style={this.props.item.wz1}>
                <label className="article-label blue">
                    <i className="icon-blog"></i>
                    {this.props.item.articlelabel}
                </label>
                <div className="clearfix article-tit">
                    <a href="#" className="big-tit l hasimg">
                        {this.props.item.bigtit}
                    </a>
                    <img src={this.props.item.imgurl} alt="" className="r"/>
                </div>
                <div>
                    <p className="article-content">
                        {this.props.item.articlecontent}
                    </p>
                    <div className="bottom-info clearfix">
                        <span>{this.props.item.span1}</span>
                        <span>{this.props.item.span2}</span>
                        <a href="#" className="r blue">
                            {this.props.item.rblue}
                            <i className="icon-right"></i>
                        </a>
                    </div>
                </div>
            </dd>

        );
    }
}

export default Shouji;