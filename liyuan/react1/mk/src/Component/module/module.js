import React, {Component} from "react";
class Module extends Component {
    render() {
        return (
            <div className="container-types clearfix">
                {this.props.h1.map(item =>
                <h3 className="types-title">

                    <span className={item.span1}> </span>
                    <em>{item.em1}</em>
                    /
                    <em>{item.em2}</em>
                    /
                    <em>{item.em3}</em>
                    /
                    <em>{item.em4}</em>
                    <span className={item.span2}></span>
                </h3>
                )}

                <div className="clearfix types-content">
                {this.props.listt1?
                    this.props.listt1.map(item =>
                            <div className="adsense-box l"
                                 style={item.img1}>
                                <a href="#">
                                    <h3 className="ellipsis">{item.h3}</h3>
                                    <p className="ellipsis">{item.p}</p>
                                </a>
                            </div>
                        ):null}

              {/*  1111111*/}

                {this.props.list1.map(
                    item =>
              <div className="index-card-container course-card-container container1">
                <a href="#" className="course-card" data-track="sztj-1-1">

                    {item.coursestat ?
                        <div className="course-stat new">
                            {item.coursestat}
                        </div>:null}

                    {item.coursestathot ?
                        <div className="course-stat hot">
                            {item.coursestathot}
                        </div>:null}

                    {item.coursestatupgrade ?
                        <div className="course-stat upgrade">
                            {item.coursestatupgrade}
                        </div>:null}

                    {item.img ?
                        <div className="course-card-top">
                            <div className="course-banner">
                                <div className="img-up" style={item.img}>
                                    <div className="course-label">
                                        <label>{item.courselabel}</label>
                                        {item.courselabel1 ?
                                            <label>{item.courselabel1}</label>:null}
                                    </div>
                                </div>
                                <div className="img-mid" style={item.img}></div>
                                <div className="img-down" style={item.img}></div>
                            </div>
                        </div>:null}

                    {item.imgurl ?
                    <div className="course-card-top hashadow">
                        <img src={item.imgurl} alt="" className="course-banner"/>
                        <div className="course-label">
                            <label>{item.courselabel}</label>
                            {item.courselabel1 ?
                                <label>{item.courselabel1}</label>:null}
                        </div>
                    </div>:null}

                    <div className="course-card-content">
                        <h3 className="course-card-name">{item.coursecardname}</h3>
                        <div className="clearfix course-card-bottom">
                            <div className="course-card-info">
                                <span>{item.span1}</span>

                                {item.span2 ?
                                    <span>{item.span2}</span>:null}
                                <span>
                                    <i className="imv2-set-sns"></i>
                                    {item.imv2setsns}
                                </span>

                                {item.xing ?
                                    <span className="course-star-box">
                                    <i className="icon-star2 on"></i>
                                    <i className="icon-star2 on"></i>
                                   <i className="icon-star2 on"></i>
                                   <i className="icon-star2 on"></i>
                                    <i className="icon-star2 on"></i>
                                 </span>:null}

                            </div>
                            <div className="course-card-price sales">
                                {item.price}
                                {item.price1 ?
                                <span className="cost-price">{item.price1}</span>:null}

                                {item.salestip ?
                                <span className="sales-tip">

                                                {item.salestip}
                                    <span className="sales-end-timer-parent">
                                         <i className="sales-timer js-sales-end-timer" data-timer="1521179"></i>
                                     </span>
                                     <span className="sales-end-timer-triangle"></span>
                                 </span>:null}
                            </div>

                        </div>
                    </div>
                </a>
              </div>
                )}
                </div>
            </div>

        );
    }
}

export default Module;