import React from 'react';
import './Settings.css';
import Sidebar from '../components/Sidebar';
import StyledButton from '../components/StyledButton';
import Review from '../components/Review';
import profile from "../resources/sample.jpg";
import profile2 from "../resources/sample2.png";
import profile3 from "../resources/sample3.jpg";
import edit from "../resources/edit.png";
import save from "../resources/save.png";

function Settings() {

	let savevalue = false;

	function StartEdit(e) {
		e.preventDefault();
		savevalue = !savevalue;
		console.log("Starting edit...")

		// undisable/disable edits
		const allinfo = document.getElementsByClassName("infotextfields");
		for (let i = 0; i < allinfo.length; i++) {
			const element = allinfo[i];
			element.disabled = (!element.disabled);
		}

		// save button animation
		const editdetails = document.getElementById("editdetails")
		const editbutton = editdetails.firstChild;
		if (savevalue) {
			editbutton.style.WebkitAnimation = "edit-to-save 1.1s forwards";
			editbutton.lastChild.src = save;
			editbutton.lastChild.style.webkitTransform = 'rotate(-360deg)';
			editbutton.firstChild.textContent = 'Save';
		} else {
			editbutton.style.animation = "save-to-edit 1.1s forwards";
			editbutton.lastChild.src = edit;
			editbutton.firstChild.textContent = 'Edit Info';
			editbutton.lastChild.style.webkitTransform = 'rotate(360deg)';
		}
		

		// FILLER db modification goes here
	}

	return (
		<div className="settings">
			<div className="sidebar">
				<Sidebar/>
			</div>
			<div className="right-side">
				<div className="content">
					<div>
						<img className="profile" src={profile2}></img>
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
						<StyledButton id="editdetails" onClick={StartEdit} innericon={edit} text="Edit Info"></StyledButton><br/> <br/> <br/>
						<div className="infotextfieldsheader">First Name</div>
						<input className="infotextfields" type="text" id="infofname" name="fname" disabled="disabled" placeholder="Muhammad"></input> <br/>
						<div className="infotextfieldsheader">Last Name</div>
						<input className="infotextfields" type="text" id="infolname" name="lname" disabled="disabled" placeholder="Ali"></input> <br/>
						<div className="infotextfieldsheader">Password</div>
						<input className="infotextfields" type="password" id="infopass" name="pass" disabled="disabled" placeholder="Password123"></input> <br/>
						<div className="infotextfieldsheader">Username</div>
						<input className="infotextfields" type="text" id="infousername" name="username" disabled="disabled" placeholder="alimuh53"></input> <br/>
						<div className="infotextfieldsheader">Email</div>
						<input className="infotextfields" type="text" id="infoemail" name="email" disabled="disabled" placeholder="moyo.ali@mail.utoronto.ca"></input> <br/>
					</div>
					<br/>
					<hr></hr>
					<br/>
					<div id="userreviews">
						<Review className="review" stars={2.7} reviewername="Ali Bayat" reviewerimage={profile3} review="I paid for yoga classes with Muhammad.... It sucked to be honest. Not only did he not teach me anything, but he would put on a yoga video and watch me doing the exercise while eating a bag of doritos. He didn't even share!"></Review>
						<Review className="review" stars={4.7} reviewername="Sofia Ilina" reviewerimage={save} review="Always makes out time to help me out! Great person!"></Review>
						<Review className="review" stars={3.7} reviewername="David Chen" reviewerimage={profile} review="Good teacher"></Review><br/><br/>
					</div>
					<br/>
				</div>
			</div>
		</div>
	);
}

export default Settings;
