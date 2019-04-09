import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import Breadcrumb from "./Breadcrumb";
import Welcome from "../components/Welcome";
import NoState from "../components/NoState";
import Events from "../components/Events";

import {Layout, Menu, Icon} from 'antd';
import '../assets/sass/layout.scss';

const {Header, Sider, Content} = Layout;

class Layouts extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className={'layout'} style={{height: '100vh'}}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					width={'300'}
					theme={'dark'}
					style={{overflow: 'auto', height: '100vh'}}
				>
					<div className="logo"/>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="user"/>
							<Link to="/home"/>
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera"/>
							<Link to="/login"/>
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload"/>
							<Link to="/test"/>
							<span>nav 3</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{
						margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
					}}
					>
						<div className="home-container">
							<div className="router-view">
								<Breadcrumb/>
								<div className="inner-container">
									<Link to={{
										pathname: '/test',
										search: '?name=homename',
										state: {mold: 'add'},
										aa: 'dddd'
									}}
									      className="home-link">
										点击跳转到路由参数search，state使用
									</Link>
									<br/>
									<div>
										任务：axios 使用、路由使用、redux使用、回顾一下文档
									</div>
									<b>常规组件之间的数据传输就是 父子组件信息传输</b> <br/>
									<Welcome name="1.有状态组件"/>
									<NoState name="2.无状态组件"/>

									<Events/>
								</div>
							</div>
							search,state可以自定义，获取方法：this.props.location.search，this.props.location.state
						</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Layouts;
