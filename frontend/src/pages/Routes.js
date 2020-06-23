import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Messages from './Messages';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/find' component={Dashboard} />
				<Route exact path='/admin' component={Dashboard} />
				<Route exact path='/messages' component={Messages} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
