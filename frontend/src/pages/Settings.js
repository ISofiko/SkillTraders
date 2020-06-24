import React from 'react';
import './Settings.css';
import Sidebar from '../components/Sidebar';
import StyledButton from '../components/StyledButton';
import profile from "../resources/sample.jpg";
import edit from "../resources/edit.png";

function Settings() {
	return (
		<div className="settings">
			<div className="sidebar">
				<Sidebar/>
			</div>
			<div className="right-side">
				<div className="content">
					<div>
						<img className="profile" src={profile}></img>
						<div className="myprofile">
							<div id="header">My Profile</div><br/>
							<StyledButton id="button" innericon={edit} text="Change Photo"></StyledButton>
						</div>
					</div>
                	<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<hr></hr>
					<br/>
				</div>
			</div>
		</div>
	);
}

export default Settings;
