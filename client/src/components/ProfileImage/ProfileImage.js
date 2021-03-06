import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import defaultAvatar from "../../resources/avatar.png";

class ProfileImage extends React.Component {

        constructor(props){
                super(props);
                this.moveToProfile = this.moveToProfile.bind(this);
        }

        moveToProfile(self) {
                if (self === "true") {
                        window.location.replace("/settings");
                } else {
                        window.location.replace("/userprofile?uid="+this.props.uid);
                }
        }

	render() {
                let self = this.props.self;

		return (
            <div>
                        <img alt="Profile" className={[this.props.className, "innerprofileimagemgmt"].join(" ")} onClick={() => this.moveToProfile(self)} src={this.props.src || defaultAvatar} id={this.props.id} ></img>
            </div>
		);
	}
}

export default ProfileImage;