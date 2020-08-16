import React from 'react';
import './style.css';
import Placeholder from '../../resources/placeholder.jpg';

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
let isAdmin = false;
if (usersess !== null) {
  isAdmin = usersess["isAdmin"] === true;
}
let styling = {visibility: "hidden"};
if (isAdmin) {
	styling = {visibility: "visible"};
}

class User extends React.Component {
	render() {
		const { uid, fname, lname, avatar, stars, joindate, lastseen, admin, email, username} = this.props;

		return (
			<div className="user">
				<img src={avatar} alt="Placeholder" />
				<div className="details">
					<h1><a href={"/userprofile?uid=" + uid}>{fname} {lname}</a></h1>
					<h2><a>{username} | {email}</a></h2>
					<h2><span className="dark-aqua">{stars}</span> Star Patron | Joined <span className="dark-aqua">{joindate}</span></h2>
					<p style={styling}><strong>Last Seen on:</strong> {lastseen}<br/>
					<strong>Admin Status:</strong> {admin}<br/></p>
					<div className="actions" style={styling}>
						<a className="fa fa-trash" onClick={(e) => alert("User has been deleted!")}></a>
					</div>
				</div>
			</div>
		);
	}
}

export default User;