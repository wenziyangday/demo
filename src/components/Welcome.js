import React, {Component} from 'react';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = this.props;
	}

	componentWillMount() {
		console.log('componentWillMount');
		// this.setState({name: '盏那是你呢'});
	}

	componentDidMount() {
		console.log('componentDidMount');
		// this.setState({name: '展示你是男是女'});
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps, nextState, nextContext);
	}

	render() {
		return (
			<h1>
				{this.state.name} <br/>
				对于有状态组件就有一个生命周期的概念 <br/>
			</h1>
		);
	}
}

export default Welcome;
