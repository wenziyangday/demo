import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import App from '../App';
import Test from '../business/Test';
import Home from '../layout/Home';
import Message from '../business/Message';
import Login from '../business/Login';
import About from '../business/About';

const Root = () => (
		<Switch>
			<Route path="/" render={props => (
				<App>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/test" component={Test}/>
						<Route path="/message/:id" component={Message}/>
						<Route path="/login" component={Login}/>
						<Route render={() => <Redirect to="/"/>}/>
					</Switch>
				</App>
			)}/>
		</Switch>
);

export default Root;
