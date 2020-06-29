import React from 'react';
import { uid } from "react-uid";
import './style.css';
import User from './User';

class AdminPanel extends React.Component {
	state = {
		query: "",
		users: [
			{ name: "David Chen" },
			{ name: "Sofia Ilina" },
			{ name: "Moe Ali" }
		]
	};

	controlInput = event => {
		this.setState({
			query: event.target.value
		});
	};

	render() {
		return (
			<div className="admin-panel">
				<h1>Admin Panel</h1>
				<input className="search-bar" type="search" placeholder="Search for user" value={this.state.query} onChange={this.controlInput}></input>

				<div className="users">
					{this.state.users.filter(user => user.name.toLowerCase().includes(this.state.query)).map(user => (
						<User key={uid(user)} name={user.name} avatar={user.avatar} link={user.link} />
					))}
				</div>
			</div>
		);
	}
}

export default AdminPanel;