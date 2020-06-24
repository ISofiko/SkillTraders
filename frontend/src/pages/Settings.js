import React from 'react';
import './Settings.css';
import Sidebar from '../components/Sidebar';
import StyledButton from '../components/StyledButton';
import profile from "../resources/sample.jpg";
import edit from "../resources/edit.png";

function Settings() {

	function StartEdit(e) {
		e.preventDefault();
		console.log("Starting edit...")
		const allinfo = document.getElementsByClassName("infotextfields");
		for (let i = 0; i < allinfo.length; i++) {
			const element = allinfo[i];
			element.disabled = false;
			element.value = "";
		}
		/*const editbutton = document.getElementById("userinfoedit").getElementsByClassName("styledbutton")[0];
		editbutton.animate([
			// keyframes
			{ tra: 1 }, 
			{ opacity: 0}
			], { 
			// timing options
			duration: 2500
			});*/
	}

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
							<StyledButton id="changepic" innericon={edit} text="Change Photo"></StyledButton>
						</div>
					</div>
                	<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<hr></hr>
					<br/>
					<div id="userinfoedit">
						<StyledButton id="editdetails" onClick={StartEdit} innericon={edit} text="Edit Info"></StyledButton><br/> <br/> <br/> <br/>
						<div className="infotextfieldsheader">First Name</div>
						<input className="infotextfields" type="text" id="infofname" name="fname" disabled="disabled" value="Muhammad"></input> <br/>
						<div className="infotextfieldsheader">Last Name</div>
						<input className="infotextfields" type="text" id="infolname" name="lname" disabled="disabled" value="Ali"></input> <br/>
						<div className="infotextfieldsheader">Password</div>
						<input className="infotextfields" type="password" id="infopass" name="pass" disabled="disabled" value="Password123"></input> <br/>
						<div className="infotextfieldsheader">Username</div>
						<input className="infotextfields" type="text" id="infousername" name="username" disabled="disabled" value="alimuh53"></input> <br/>
						<div className="infotextfieldsheader">Email</div>
						<input className="infotextfields" type="text" id="infoemail" name="email" disabled="disabled" value="moyo.ali@mail.utoronto.ca"></input> <br/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
