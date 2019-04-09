/*
	侧边栏
*/

import React, {Component} from 'react';

import '../assets/sass/sidebar.scss';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				sidebar ----
				{this.props.children}
			</div>
		);
	}
}

export default Sidebar;
