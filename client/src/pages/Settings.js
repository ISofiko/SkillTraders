import React from 'react';
import './Settings.css';
import Sidebar from '../components/Sidebar';
import StarRating from '../components/StarRating';
import StyledButton from '../components/StyledButton';
import ProfileImage from '../components/ProfileImage';
import Review from '../components/Review';
import defaultAvatar from "../resources/avatar.png";
import profile from "../resources/sample.jpg";
import profile2 from "../resources/sample2.png";
import profile3 from "../resources/sample3.jpg";
import edit from "../resources/edit.png";
import save from "../resources/save.png";
const axios = require("axios");
const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
const serverURL = "http://localhost:5000";

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.savevalue = false;
		this.state = {
			image_url: "",
			fname: "",
			lname: "",
			password: "",
			username: "",
			email: ""
		};
	}

	showReviews() {
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

	componentDidMount() {
		const getProfileInfo = async () => {
			axios.get(serverURL + "/api/user/" + usersess.username).then((result) => {
				if (result.data.image_url) {
					this.setState({
						image_url: result.data.image_url
					});
				} else {
					this.setState({
						image_url: defaultAvatar
					});
				}
				this.setState({
					fname: result.data.fname,
					lname: result.data.lname,
					password: result.data.password,
					username: result.data.username,
					email: result.data.email
				});
			});
		};
		getProfileInfo();
	}

	changePhoto(e) {
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

		// sending photo file over to state to be saved to db eventually
		const savebutton = document.getElementById('save');
		savebutton.click();
    }

    submitPhoto(e) {
    	e.preventDefault();
    	const form = new FormData(e.target);
    	const request = new Request(serverURL + "/api/image", {
    		method: "post",
    		body: form
    	});

    	fetch(request).then(async (result) => {
    		const image_url = (await result.json()).url;
			console.log(image_url)

			usersess.image_url = image_url;
			window.localStorage.setItem("SkillTraders2020!UserSession", JSON.stringify(usersess));

			document.getElementById("settings-profile-image").src = image_url;

			alert("Your profile picture has been updated!");
			
    		axios.post(serverURL + "/api/user/" + usersess.id, {
				image_url: image_url
    		}).then((result) => {
				console.log(result);
    		}).catch((error) => {
    			console.log(error);
    		});
		});
		
		console.log("IMAGE GONE THRU");
        console.log(usersess.image_url);
    }

	startEdit(e) {
		e.preventDefault();
		this.savevalue = !this.savevalue;

		// undisable/disable edits
		const allinfo = document.getElementsByClassName("infotextfields");
		for (let i = 0; i < allinfo.length; i++) {
			const element = allinfo[i];
			element.disabled = (!element.disabled);
		}

		// save button animation
		const editdetails = document.getElementById("editdetails")
		const editbutton = editdetails.firstChild;
		if (this.savevalue) {
			editbutton.style.WebkitAnimation = "edit-to-save 1.1s forwards";
			editbutton.lastChild.src = save;
			editbutton.lastChild.style.webkitTransform = 'rotate(-360deg)';
			editbutton.firstChild.textContent = 'Save';
		} else {
			editbutton.style.animation = "save-to-edit 1.1s forwards";
			editbutton.lastChild.src = edit;
			editbutton.firstChild.textContent = 'Edit Info';
			editbutton.lastChild.style.webkitTransform = 'rotate(360deg)';

			// Saving data
			const set = async () => {
				this.setState({
					fname: document.querySelector("#infofname").value || this.state.fname,
					lname: document.querySelector("#infolname").value || this.state.lname,
					password: document.querySelector("#infopassword").value || this.state.password,
					username: document.querySelector("#infousername").value || this.state.username,
					email: document.querySelector("#infoemail").value || this.state.email
				});
				document.querySelector("#infofname").value = "";
				document.querySelector("#infolname").value = "";
				document.querySelector("#infopassword").value = "";
				document.querySelector("#infousername").value = "";
				document.querySelector("#infoemail").value = "";
			};
			set().then(() => {

				usersess.username = this.state.username;
				usersess.password = this.state.password;
				usersess.fname = this.state.fname;
				usersess.lname = this.state.lname;
				usersess.email = this.state.email;
				window.localStorage.setItem("SkillTraders2020!UserSession", JSON.stringify(usersess));

				axios.post(serverURL + "/api/user/" + usersess._id, {
	    			fname: this.state.fname,
	    			lname: this.state.lname,
	    			password: this.state.password,
	    			username: this.state.username,
	    			email: this.state.email
	    		}).then((result) => {
	    			console.log(result);
	    		}).catch((error) => {
	    			console.log(error);
	    		});
			})
		}
		
		// FILLER db modification goes here (update db entries for user)
	}

	render() {
		return (
			<div className="settings">
				<div className="sidebar">
					<Sidebar/>
				</div>
				<div className="right-side">
					<div className="content">
						<div>
							<ProfileImage id="settings-profile-image" className="profile" src={this.state.image_url} uid={usersess.id}></ProfileImage>
							<div className="myprofile">
								<div id="header">My Profile</div><br/>
								<label htmlFor="file-input-posting" className="custom-file-upload"> Choose  Profile  Picture </label>
								<form method="post" encType="multipart/form-data" onSubmit={this.submitPhoto}>
	                            	<input id="file-input-posting" type="file" accept=".png, .jpeg, .jpg" name="image" onChange={this.changePhoto} />
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
							<StyledButton id="editdetails" onClick={this.startEdit.bind(this)} innericon={edit} text="Edit Info"></StyledButton><br/> <br/> <br/>
							<div className="infotextfieldsheader">First Name</div>
							<input className="infotextfields" type="text" id="infofname" name="fname" disabled="disabled" placeholder={this.state.fname}></input> <br/>
							<div className="infotextfieldsheader">Last Name</div>
							<input className="infotextfields" type="text" id="infolname" name="lname" disabled="disabled" placeholder={this.state.lname}></input> <br/>
							<div className="infotextfieldsheader">Password</div>
							<input className="infotextfields" type="password" id="infopassword" name="password" disabled="disabled" placeholder={this.state.password}></input> <br/>
							<div className="infotextfieldsheader">Username</div>
							<input className="infotextfields" type="text" id="infousername" name="username" disabled="disabled" placeholder={this.state.username}></input> <br/>
							<div className="infotextfieldsheader">Email</div>
							<input className="infotextfields" type="text" id="infoemail" name="email" disabled="disabled" placeholder={this.state.email}></input> <br/>
						</div>
						<br/>
						<hr></hr>
						<br/>
						{this.showReviews()}
						<br/>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;
