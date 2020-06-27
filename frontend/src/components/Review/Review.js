import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { uid } from "react-uid";
import './style.css';

class Review extends React.Component {

        constructor(props){
                super(props);
        }

	render() {

		return (
            <div className={[this.props.className, "innerreviewstyle"].join(" ")} id={this.props.id}>
                    <div id='innerreviewstyleheader'>
                        <ProfileImage id="innerreviewstylepicture" src={this.props.reviewerimage} uid="filler101"></ProfileImage>
                        <div id="innerreviewstylename">
                                <ReactStars count={5} value={this.props.stars} size={35} color2={'#ffd700'} edit={false}/>
                                {this.props.reviewername} says...
                        </div>
                    </div>
                    <div id="innerreviewstylereview">{this.props.review}</div>
            </div>
		);
	}
}

export default Review;