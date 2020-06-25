import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import profile2 from "../../resources/sample2.png";
import placeholder2 from "../../resources/fakelogo.png";
import dropdown from "../../resources/dropdown.png";

class Sidebar extends React.Component {

        changetoMain() {
                console.log("Changing to main");
                window.location.replace('/dashboard');
        }

        changetoAdmin() {
                console.log("Changing to admin");
                window.location.replace('/admin');
        }

        changetoMessages() {
                console.log("Changing to messages");
                window.location.replace('/messages');
        }

        changetoFind() {
                console.log("Changing to find");
                window.location.replace('/find');
        }

        changetoLogin() {
                console.log("Changing to login");
                window.location.replace('/');
        }

        changetoSettings() {
                console.log("Changing to settings");
                window.location.replace('/settings');
        }

	render() {
		return (
            <div className="sidebar">
                <img className="logo" src={profile2}></img>
                <br/>
                <br/>
                <div className="link" onClick={this.changetoMain}>
                        Home
                </div>
                <div className="link" onClick={this.changetoMain}>
                        Search for User
                </div>
                <div className="section">
                    My SkillTraders <img className="dropicon" src={dropdown}></img>
                    <div className="dropdown">
                        <div className="link" onClick={this.changetoMessages}>
                                Messages
                        </div>
                        <div className="link" onClick={this.changetoFind}>
                                Create A Listing
                        </div>
                    </div>
                </div>
                <div className="section">
                Settings <img className="dropicon" src={dropdown}></img>
                    <div className="dropdown">
                        <div className="link" onClick={this.changetoSettings}>
                                My Profile
                        </div>
                        <div className="link" onClick={this.changetoLogin}>
                                Sign Out
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