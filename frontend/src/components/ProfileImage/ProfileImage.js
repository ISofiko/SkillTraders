import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';

class ProfileImage extends React.Component {

        constructor(props){
                super(props);
                this.moveToProfile = this.moveToProfile.bind(this);
        }

        moveToProfile() {
                window.location.replace("/userprofile?uid="+this.props.uid);
        }

	render() {

		return (
            <div>
                        <img className={[this.props.className, "innerprofileimagemgmt"].join(" ")} onClick={this.moveToProfile} src={this.props.src} id={this.props.id} ></img>
            </div>
		);
	}
}

export default ProfileImage;