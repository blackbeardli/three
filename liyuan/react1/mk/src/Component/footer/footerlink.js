import React, { Component } from 'react';
import './css/footerlink.css';
class Footerlink extends Component {
    render() {
        return (
            <div className="footer-link">
                <a href="#" target="_blank" title="企业合作">企业合作</a>
                <a href="#" target="_blank" title="人才招聘">人才招聘</a>
                <a href="#" target="_blank" title="联系我们">联系我们</a>
                <a href="#" target="_blank" title="讲师招募">讲师招募</a>
                <a href="#" target="_blank" title="帮助中心">帮助中心</a>
                <a href="#" target="_blank" title="意见反馈">意见反馈</a>
                <a href="#" target="_blank" title="慕课大学">慕课大学</a>
                <a href="#" target="_blank" title="代码托管">代码托管</a>
                <a href="#" target="_blank" title="友情链接">友情链接</a>
            </div>

        );
    }
}
export default Footerlink;