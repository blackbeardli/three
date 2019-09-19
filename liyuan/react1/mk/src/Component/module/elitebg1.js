import React, {Component} from "react";
class Elitebg1 extends Component {
    render() {
        return (
            <div className="swiper-wrapper js-swiper-wrap">
             {/*   1*/}
             <div className="lecturer-list clearfix swiper-slide  " data-swiper-slide-index="0"

                 style={{width: "1152px" ,marginright: "30px"}}>
                 {this.props.list1.map(item =>
                <a href="#" className="lecturer-item">
                    <img src={item.img} alt="" className="lecturer-uimg"/>
                    <span className="lecturer-name">{item.lecturername}</span>
                    <span className="lecturer-title">{item.lecturertitle}</span>
                    <span className="lecturer-p"
                          title="十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。">
                         {item.lecturerp}
                            </span>
                </a>
                 )}
             </div>

          {/*      2*/}
                <div className="lecturer-list clearfix swiper-slide  " data-swiper-slide-index="0"
                     style={{width: "1152px" ,marginright: "30px"}}>
                    {this.props.list2.map(item =>

                    <a href="#" className="lecturer-item">
                        <img src={item.img} alt="" className="lecturer-uimg"/>
                        <span className="lecturer-name">{item.lecturername}</span>
                        <span className="lecturer-title">{item.lecturertitle}</span>
                        <span className="lecturer-p"
                              title="十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。">十年研发及团队管理经验，对程序员面临的各种问题深有体会；
                            {item.lecturerp}

                        </span>
                    </a>
                    )}

                </div>

          </div>



        );
    }
}

export default Elitebg1;