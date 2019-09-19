import React, {Component} from "react";
import Footersns from "./footersns";
import Footerlink from "./footerlink";
import Footercopyright from "./footercopyright";
import './css/footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer idx-minwidth">
                <div className="container">
                 <Footersns/>
                 <Footerlink/>
                 <Footercopyright/>
                </div>
            </div>
        );
    }
}

export default Footer;