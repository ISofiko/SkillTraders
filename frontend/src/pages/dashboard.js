import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import FindPosting from '../components/FindPosting';
import AdminPanel from '../components/AdminPanel';


function Dashboard() {
	let location = useLocation().pathname;
	let component;
	switch (location) {
		case "/admin":
			component = <AdminPanel />;
			break;
		default:
			component = <FindPosting />;
			break;
	}

	return (
		<div className="dashboard">
			<div className="sidebar">
				<p>sidebar here</p>
			</div>
			<div className="right-side">
				<div className="content">
					{component}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;