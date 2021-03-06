import React from 'react';
import { uid } from "react-uid";
import './style.css';
import User from './User';
import Console from './Console';
import defaultAvatar from "../../resources/avatar.png";
const axios = require("axios");
const serverURL = "";

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
let isAdmin = false;
if (usersess !== null) {
  isAdmin = usersess["isAdmin"];
}
let title = "Find User";
let styling = {visibility: "hidden"};
if (isAdmin) {
	title = "Admin Panel";
	styling = {visibility: "hidden"}; // Replace with visible
}

class AdminPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			users: [],
			console: true
		};
	}

	componentDidMount() {
		const getUsers = async () => {
			await axios.get(serverURL + "/api/users").then((result) => {
				console.log(result.data)
				this.setState({
					users: result.data
				});
			});
		};
		getUsers();
	}

	controlInput(event) {
		this.setState({
			query: event.target.value
		});
	}

	render() {
		return (
			<div className="admin-panel">
				<h1>{title}</h1>

				<input className="search-bar" type="search" placeholder="Search for user" value={this.state.query} onChange={this.controlInput}></input>
				<div className="users">
					{this.state.users.filter(user => user.username.toLowerCase().includes(this.state.query)).map(user => (
						<User 
						key={user._id}
						uid={user._id}
						username={user.username}
						fname={user.fname} 
						lname={user.lname}
						avatar={user.image_url || defaultAvatar} 
						stars={Math.round(user.avgRating * 100) / 100} 
						joindate={String(new Date(user.firstLogin)).split(" ").splice(1, 3).join(" ")} 
						lastseen={String(new Date(user.lastSeen)).split(" ").splice(1, 3).join(" ")} 
						admin={String(user.admin)} 
						email={user.email}
						/>
					))}
				</div>

				<Console style={styling} />
			</div>
		);
	}
}

export default AdminPanel;