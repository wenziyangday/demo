/*
   Home 主页
*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../assets/sass/home.scss';
import Sidebar from './Sidebar';
import Breadcrumb from "./Breadcrumb";
import Welcome from "../components/Welcome";


class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<Sidebar/>

				<div className="router-view">
					<Breadcrumb/>
					<Link to={{pathname: '/test', search: '?name=homename', state: {mold: 'add'}, aa: 'dddd'}}
					      className="home-link">
						点击跳转到路由参数search，state使用
					</Link>


					<Welcome/>
				</div>
				{/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}

			</div>
		);
	}
}

export default Home;
