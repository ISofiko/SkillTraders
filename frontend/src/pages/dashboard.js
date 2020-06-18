import React from 'react';
import './Dashboard.css';
import FindPosting from '../components/FindPosting';

function Dashboard() {
	return (
		<div className="dashboard">
			<div className="sidebar">
				<p>sidebar here</p>
			</div>
			<div className="right-side">
				<div className="content">
					<FindPosting />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;