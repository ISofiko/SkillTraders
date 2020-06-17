import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/dashboard' component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;