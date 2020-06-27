import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import StyledButton from '../StyledButton';

class StarRating extends React.Component {

        constructor(props){
                super(props);
                this.submitreview = this.submitreview.bind(this);
        }

        storestarratingtemp = (newrating) => {
                localStorage.setItem("SkillTraders2020!tempstar", String(newrating));
                console.log("Rating applied: " + newrating);
        }

        submitreview() {
                // FILLER! db code goes here
                // get userids of reviewer and reviewee
                let reviewee = this.props.uid;
                const urlParams = new URLSearchParams(window.location.search);
                let reviewer = urlParams.get('uid');
                console.log(reviewer);
                // get star rating and review
                let rating = Number(localStorage.getItem("SkillTraders2020!tempstar"));
                let review = this.review.value;
                // check if user already submitted review for this user
                // if not, push all this info to db otherwise prompt error
                if (true) {
                        window.alert("You've already submitted a review for this user!");
                }
        }

	render() {

		return (
            <div className={[this.props.className, "innerratingstyle"].join(" ")} id={this.props.id}>
                                <ReactStars count={5} size={60} color2={'#ffd700'} color1={'#595d78'} className="starinnerstyle" onChange={this.storestarratingtemp}/>
                                <div className="startextfieldsheader">Write Your Review Below</div>
			        <textarea className="startextfields" type="text" id="starreviewtext" name="reviewstar" ref={(c) => this.review = c} placeholder="Start typing your review here..."></textarea> <br/>
                                <StyledButton id="submitreview" innerclass="submitreview" text="Submit Review" onClick={this.submitreview}/>
            </div>
		);
	}
}

export default StarRating;