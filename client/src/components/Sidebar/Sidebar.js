import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import ProfileImage from "../ProfileImage";
import profile2 from "../../resources/sample2.png";
import placeholder2 from "../../resources/fakelogo.png";
import dropdown from "../../resources/dropdown.png";

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
let isAdmin = false;
let profile = profile2;
if (usersess !== null) {
  isAdmin = usersess["isAdmin"] === true;

  if(usersess["image_url"] !== null && typeof usersess["image_url"] !== "undefined" ) {
        profile = usersess["image_url"];
        }
}


let userredirect = (isAdmin ? 'Admin Panel' : "Search for User"); ;

class Sidebar extends React.Component {

        changetoMain() {
                console.log("Changing to main");
                window.location.replace('/dashboard');
        }

        changetoAdmin() {
                console.log("Changing to admin (if access, otherwise search for user)");
                const adminaccess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"))["isAdmin"];
                if (adminaccess) {
                        window.location.replace('/admin');
                } else {
                        window.location.replace('/users');
                }
                
        }

        changetoMessages() {
                console.log("Changing to messages");
                window.location.replace('/messages');
        }

        changetoAddPosting() {
                console.log("Changing to creating new posting");
                window.location.replace('/add-posting');
        }

        changetoFind() {
                console.log("Changing to find");
                window.location.replace('/posts');
        }

        changetoLogin() {
                // delete user session
                window.localStorage.removeItem("SkillTraders2020!UserSession");
                console.log("Changing to login");
                window.location.replace('/');
        }

        changetoSettings() {
                console.log("Changing to settings");
                window.location.replace('/settings');
        }

        showCreation() {
                const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
                let isAdmin = false;
                if (usersess !== null) {
                  isAdmin = usersess["isAdmin"] === true;
                }
                if (isAdmin) {
                        return;
                } else {
                        return (<div className="link" onClick={this.changetoAddPosting}>Create A Posting</div>);
                }
        }

	render() {

                let creation = this.showCreation();

		return (
            <div className="sidebar">
                <ProfileImage self="true" className="logo" src={profile} uid="filler101"></ProfileImage>
                <br/>
                <br/>
                <div className="link" onClick={this.changetoMain}>
                        Home
                </div>
                <div className="link" onClick={this.changetoAdmin}>
                        {userredirect}
                </div>
                <div className="section">
                    My SkillTraders <img className="dropicon" src={dropdown}></img>
                    <div className="dropdown">
                        <div className="link" onClick={this.changetoMessages}>
                                Messages
                        </div>
                        {creation}
                    </div>
                </div>
                <div className="section">
                Settings <img className="dropicon" src={dropdown}></img>
                    <div className="dropdown">
                        <div className="link" onClick={this.changetoLogin}>
                                Sign Out
                        </div>
                        <div className="link" onClick={this.changetoSettings}>
                                My Profile
                        </div>
                    </div>
                </div>
                <div className="footer">
                    Copyright SkillTraders LLC 2020
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <img className="logo2" src={placeholder2} onClick={this.changetoMain}></img>
            </div>
		);
	}
}

export default Sidebar;