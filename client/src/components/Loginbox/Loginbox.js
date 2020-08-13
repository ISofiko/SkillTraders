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
                this.tryRegister = this.tryRegister.bind(this);
        }

        rewriteMessage(message) {
                message.style.display = "none";
                message.style.display = "block";
                message.animate([
                        // keyframes
                        { opacity: 0 }, 
                        { opacity: 1}
                      ], { 
                        // timing options
                        duration: 2500
                      });
        }

        switchToLogin() {
                const logininfo = document.getElementById("logininfo");
                const registerinfo = document.getElementById("registerinfo");
                registerinfo.style.display = "none";
                logininfo.style.display = "block";
        }

        switchToRegister() {
                const logininfo = document.getElementById("logininfo");
                const registerinfo = document.getElementById("registerinfo");
                registerinfo.style.display = "block";
                logininfo.style.display = "none";
        }

        tryRegister() {
                const message = document.getElementById("errormessageregister");
                message.style.display = "none";
                console.log("Attempting registration...");
                if(this.newpassword.value !== this.confirmpassword.value) {
                        message.textContent = "Passwords do not match!"
                        this.rewriteMessage(message);
                        return;
                }
                if(this.newpassword.value.length < 6) {
                        message.textContent = "Password must be at least 6 characters!"
                        this.rewriteMessage(message);
                        return;
                }
                if(this.newusername.value.length < 6) {
                        message.textContent = "Username must be at least 6 characters!"
                        this.rewriteMessage(message);
                        return;
                }
                const re = /\S+@\S+\.\S+/;
                if(!re.test(this.email.value)) {
                        message.textContent = "A valid email address was not found!"
                        this.rewriteMessage(message);
                        return;
                }
                /* db related code goes here FILLER 
                Will register the user below before redirecting to dashboard
                */

                // create user session FILL WITH DB VALUES                                                                  FALSE DEFAULT V
                const usersess = {"uid":null, "username":null, "password":null, "email":null, "fname":null, "lname":null, "isAdmin":false};
                window.localStorage.setItem("SkillTraders2020!UserSession", JSON.stringify(usersess));

                window.location.replace('/dashboard');
        }

        checkAlreadySignedIn() {
              if (window.localStorage.getItem("SkillTraders2020!UserSession") !== null) {
                window.location.replace('/dashboard');    
              }  
        }

        tryLogin() {
                const message = document.getElementById("errormessage");
                /* db related code goes here FILLER Will check for correct access credentials */
                console.log("Attempting login...");
                // replace the below IF statement with DB password and username check
                if ((this.username.value === "user" && this.password.value === "user") || 
                (this.username.value === "admin" && this.password.value === "admin")) {

                        // create user session FILL WITH DB VALUES                                                              ADMIN DB VALUE V
                        const usersess = {"uid":null, "username":null, "password":null, "email":null, "fname":null, "lname":null, "isAdmin":true};
                        window.localStorage.setItem("SkillTraders2020!UserSession", JSON.stringify(usersess));

                        // go to home page
                        window.location.replace('/dashboard');
                } else {
                        // flash text saying inccorect login info
                        this.rewriteMessage(message);
                }
        }

	render() {
                this.checkAlreadySignedIn();
		return (
        <div>
            <div className="accessbox" id="logininfo">
                <span className="header">Login</span>
                <br/>
                <br/>
                <div className="tiny"><i className="italize">SkillTraders</i> allows you to support community members while 
                maintaining social distance by sharing or selling service skills with one another. Start
                your journey into the lively marketplace today by <b className="italize"><i className="italize">signing in</i></b>.
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
                <div className="incorrect" id="errormessage">Incorrect password or username found</div>
            </div>
            <div className="accessbox" id="registerinfo">
                <span className="header">Register</span>
                <br/>
                <br/>
                <div className="tiny">Welcome to <i className="italize">SkillTraders</i>! <i className="italize">SkillTraders</i> allows you to support community members while 
                maintaining social distance by sharing or selling service skills with one another. Start
                your journey into the lively marketplace today by <b className="italize"><i className="italize">registering</i></b>.
                </div>
                <br/>
                Username<br/>
                <input className="inputtext" type="text" id="username" ref={(c) => this.newusername = c} name="username"></input>
                <br/>
                Email <br/>
                <input className="inputtext" type="text" id="email" ref={(c) => this.email = c} name="email"></input>
                <br/>
                Password <br/>
                <input className="inputtext" type="password" id="password" ref={(c) => this.newpassword = c} name="password"></input>
                <br/>
                Confirm Password <br/>
                <input className="inputtext" type="password" id="confirmpassword" ref={(c) => this.confirmpassword = c} name="password"></input>
                <br/>
                <button className="loginbutton" id="registerbutton" onClick={this.tryRegister}>Sign Up</button> <br/>
                <br/>
                <div className="incorrect" id="errormessageregister">A problem occurred during registration</div>
            </div>
            <button id="logintab" onClick={this.switchToLogin}>Login</button>
            <button id="registertab" onClick={this.switchToRegister}>Register</button>
            <br/>
        </div>
		);
	}
}

export default Loginbox;