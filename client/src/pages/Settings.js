import React from 'react';
import './Settings.css';
import Sidebar from '../components/Sidebar';
import StarRating from '../components/StarRating';
import StyledButton from '../components/StyledButton';
import ProfileImage from '../components/ProfileImage';
import Review from '../components/Review';
import profile from "../resources/sample.jpg";
import profile2 from "../resources/sample2.png";
import profile3 from "../resources/sample3.jpg";
import edit from "../resources/edit.png";
import save from "../resources/save.png";
const axios = require("axios");

function Settings() {

	let savevalue = false;

	function showReviews() {
		const adminaccess = window.localStorage.getItem("SkillTraders2020!Admin");
		if (adminaccess === "true") {
				return;
		} else {
				return (
					<div id="userreviews">
						{// FILLER! db code goes here Sample elements currently drawn
						}
						<Review className="review" stars={2.7} reviewername="Ali Bayat" reviewerimage={profile3} review="I paid for yoga classes with Muhammad.... It sucked to be honest. Not only did he not teach me anything, but he would put on a yoga video and watch me doing the exercise while eating a bag of doritos. He didn't even share!"></Review>
						<Review className="review" stars={4.7} reviewername="Sofia Ilina" reviewerimage={save} review="Always makes out time to help me out! Great person!"></Review>
						<Review className="review" stars={3.7} reviewername="David Chen" reviewerimage={profile} review="Good teacher"></Review><br/><br/>
					</div>
				);
		}
	}

	let reviews = showReviews();

	function changePhoto(e) {
		let preview = document.getElementsByClassName("profile")[0];
		let file    = document.getElementById("file-input-posting").files[0];
		let reader  = new FileReader();
	
		reader.onloadend = function () {
		preview.src = reader.result;
		}
		console.log(file);
		if (file) {
		reader.readAsDataURL(file);
		} else {
		preview.src = "";
		}

		// DB CODE GOES HERE -> REPLACE IMG TO DB
    }

    function submitPhoto(e) {
    	e.preventDefault();
    	const form = new FormData(e.target);
    	const request = new Request("http://localhost:5000/api/image", {
    		method: "post",
    		body: form
    	});

    	fetch(request).then(async (result) => {
    		const image_url = (await result.json()).url;
    		console.log(image_url)
    		/*
    		axios.post("http://localhost:5000/api/user/" + "user_id_here",{
    			image_url: image_url
    		});
    		*/
    	});
    }

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
		
		// FILLER db modification goes here (update db entries for user)
	}

	return (
		<div className="settings">
			<div className="sidebar">
				<Sidebar/>
			</div>
			<div className="right-side">
				<div className="content">
					<div>
						<ProfileImage className="profile" src={profile2} uid="filler101"></ProfileImage>
						<div className="myprofile">
							<div id="header">My Profile</div><br/>
							<label htmlFor="file-input-posting" className="custom-file-upload"> Choose  Profile  Picture </label>
							<form method="post" encType="multipart/form-data" onSubmit={submitPhoto}>
                            	<input id="file-input-posting" type="file" accept=".png, .jpeg, .jpg" name="image" onChange={changePhoto} />
                            	<button id="save" type="submit">Save</button>
                        	</form>
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
					{reviews}
					<br/>
				</div>
			</div>
		</div>
	);
}

export default Settings;
