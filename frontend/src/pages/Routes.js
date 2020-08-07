import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Settings from './Settings';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import UserProfile from './UserProfile';
import Messages from './Messages';
import CreatePosting from './CreatePosting';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Landing} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/posts' component={Dashboard} />
				<AdminRoute exact path='/admin' component={Dashboard} />
				<PrivateRoute exact path='/users' component={Dashboard} />
				<PrivateRoute exact path='/settings' component={Settings} />
				<PrivateRoute exact path='/userprofile' component={UserProfile} />
				<PrivateRoute exact path='/messages' component={Messages} />
				<PrivateRoute exact path='/add-posting' component={CreatePosting} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
