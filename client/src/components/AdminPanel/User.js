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
		const { name, avatar, stars, date, bio } = this.props;

		return (
			<div className="user">
				<img src={avatar} alt="Placeholder" />
				<div className="details">
					<h1><a href={"/userprofile?uid=" + name}>{name}</a></h1>
					<h2><span className="dark-aqua">{stars}</span> Star Patron | Joined <span className="dark-aqua">{date}</span></h2>
					<p><strong>Bio:</strong> {bio}</p>
					<div className="actions" style={styling}>
						<a className="fa fa-pencil" href={"/userprofile?uid=" + name}></a>
						<a className="fa fa-trash" onClick={(e) => alert("User has been deleted!")}></a>
					</div>
				</div>
			</div>
		);
	}
}

export default User;