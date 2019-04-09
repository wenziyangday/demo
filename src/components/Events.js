/*
	事件绑定
*/

import React, {Component} from 'react';
import Button from 'antd/lib/button';

class Events extends Component {
	//  这种可以绑定 class this
	buttonClick = () => {
		console.log(this);
	};

	//  默认不绑定 class this
	buttonClick2() {
		console.log(this);
	};

	render() {
		const arr = [1, 2, 3, 5, 6];
		const arrs = arr.map((x, index) => (
			<li key={index}>{x}--{index}</li>
		));
		return (
			<div className="event">
				<ul>
					{arrs}
				</ul>
				<div>关于this 的使用</div>
				<Button type="primary" onClick={this.buttonClick2.bind(this)}>
					this 绑定 1
				</Button>
				<Button type={"danger"} onClick={this.buttonClick}>
					this bangding
				</Button>
				{this.props.name ? '展示' : 'asdfasdfasdf'}
				<Button onClick={() => {
					this.buttonClick2()
				}}>
					按钮
				</Button>
			</div>
		);
	}
}

export default Events;
