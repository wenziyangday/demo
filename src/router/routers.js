import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import App from '../App';
import Test from '../components/Test';
import Home from '../components/Home';
import Message from '../components/Message';

const Root = () => (
	<div>
		<Switch>
			<Route path="/" render={props => (
				<App>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/test" component={Test}/>
						<Route path="/message/:id" component={Message}/>
						<Route render={() => <Redirect to="/"/>}/>
					</Switch>
				</App>
			)}/>
		</Switch>
	</div>
);

export default Root;
