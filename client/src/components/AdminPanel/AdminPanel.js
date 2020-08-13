import React from 'react';
import { uid } from "react-uid";
import './style.css';
import User from './User';
import Console from './Console';

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
let isAdmin = false;
if (usersess !== null) {
  isAdmin = usersess["isAdmin"] === true;
}
let title = "Find User";
let styling = {visibility: "hidden"};
if (isAdmin) {
	title = "Admin Panel";
	styling = {visibility: "hidden"}; // Replace with visible
}

class AdminPanel extends React.Component {
	state = {
		query: "",
		users: [
			{ name: "David Chen", avatar: "https://placekitten.com/200/200", stars: "0.1", date: "January 1, 2018", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
			{ name: "Sofia Ilina", avatar: "https://placekitten.com/200/201", stars: "3.6", date: "March 4, 2016", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
			{ name: "Moe Ali", avatar: "https://placekitten.com/201/200", stars: "4.4", date: "June 27, 2020", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
		],
		console: true
	};

	controlInput = event => {
		this.setState({
			query: event.target.value
		});
	};

	render() {
		return (
			<div className="admin-panel">
				<h1>{title}</h1>

				<input className="search-bar" type="search" placeholder="Search for user" value={this.state.query} onChange={this.controlInput}></input>
				<div className="users">
					{this.state.users.filter(user => user.name.toLowerCase().includes(this.state.query)).map(user => (
						<User key={uid(user)} name={user.name} avatar={user.avatar} stars={user.stars} date={user.date} bio={user.bio} link={user.link} />
					))}
				</div>

				<Console style={styling} />
			</div>
		);
	}
}

export default AdminPanel;