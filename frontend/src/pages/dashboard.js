import React from 'react';
import './Dashboard.css';
import FindPosting from '../components/FindPosting';

function Dashboard() {
	return (
		<div className="dashboard">
			<div className="sidebar">
				<p>sidebar here</p>
			</div>
			<div className="content">
				<FindPosting />
			</div>
		</div>
	);
}

export default Dashboard;