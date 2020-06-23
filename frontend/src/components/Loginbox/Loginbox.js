import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import placeholder from "../../resources/sample.jpg";
import placeholder2 from "../../resources/fakelogo.png";
import dropdown from "../../resources/dropdown.png";

class Loginbox extends React.Component {

        constructor(props){
                super(props);
                this.tryLogin = this.tryLogin.bind(this);
        }

        tryLogin() {
                /* db related code goes here FILLER */
                console.log("Attempting login...");
                if (this.username.value === "moyoonthego" && this.password.value === "muhammadali"
                || this.username.value === "sofiailina" && this.password.value === "sofiailina"
                || this.username.value === "davidchen" && this.password.value === "davidchen") {
                        window.location.replace('/dashboard');
                } else {
                        // flash text saying inccorect login info
                }
        }

	render() {
		return (
            <div className="accessbox">
                <span className="header">Login</span>
                <br/>
                <br/>
                <div className="tiny">Welcome to <i className="italize">SkillTraders</i>! <i className="italize">SkillTraders</i> allows you to support community members while 
                maintaining social distance by sharing or selling service skills with one another. Start
                your journey into the lively marketplace today by <b className="italize">signing in</b>.
                </div>
                <br/>
                <br/>
                Username or Email<br/>
                <input className="inputtext" type="text" id="userinfo" ref={(c) => this.username = c} name="username"></input>
                <br/>
                Password <br/>
                <input className="inputtext" type="password" id="passinfo" ref={(c) => this.password = c} name="password"></input>
                <br/>
                <br/>
                <button className="loginbutton" onClick={this.tryLogin}>Submit</button> <br/>
                <br/>
            </div>
		);
	}
}

export default Loginbox;