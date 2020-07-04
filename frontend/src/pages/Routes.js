import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Settings from './Settings';
import UserProfile from './UserProfile';
import Messages from './Messages';
import CreatePosting from './CreatePosting'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/posts' component={Dashboard} />
				<Route exact path='/admin' component={Dashboard} />
				<Route exact path='/users' component={Dashboard} />
				
				<Route exact path='/settings' component={Settings} />
				<Route exact path='/userprofile' component={UserProfile} />
				<Route exact path='/messages' component={Messages} />
				<Route exact path='/add-posting' component={CreatePosting} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
