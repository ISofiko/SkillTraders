import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import FindPosting from '../components/FindPosting';
import AdminPanel from '../components/AdminPanel';

function Dashboard() {
	let location = useLocation().pathname;
	let component;
	switch (location) {
		case "/posts":
			component = <FindPosting />;
			break;
		case "/admin":
			component = <AdminPanel />;
			break;
		case "/users":
			component = <AdminPanel />;
			break;
		default:
			component = <FindPosting />;
			break;
	}

	return (
		<div className="dashboard">
			<div className="sidebar">
				<Sidebar/>
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
