/*
   Home 主页
*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../assets/sass/home.scss';
import Sidebar from './Sidebar';
import Breadcrumb from "./Breadcrumb";
import Welcome from "../components/Welcome";
import NoState from "../components/NoState";



class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<Sidebar/>

				<div className="router-view">
					<Breadcrumb/>
					<div className="inner-container">
						<Link to={{pathname: '/test', search: '?name=homename', state: {mold: 'add'}, aa: 'dddd'}}
						      className="home-link">
							点击跳转到路由参数search，state使用
						</Link>
						<br/>

						<b>常规组件之间的数据传输就是 父子组件信息传输</b> <br/>
						<Welcome name="1.有状态组件"/>
						<NoState name="2.无状态组件"/>
					</div>

				</div>
				{/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}

			</div>
		);
	}
}

export default Home;
