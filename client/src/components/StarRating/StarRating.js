import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import { uid } from "react-uid";
import './style.css';
import StyledButton from '../StyledButton';
const axios = require("axios");

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));

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
                console.log(this.props.revieweeReviewers);
                if (this.props.revieweeReviewers.includes(usersess.username)) {
                        window.alert("You've already submitted a review for this user!");
                } else {
                        let updatedreviewers = this.props.revieweeReviewers.push(usersess.username);
                        let rating = Number(localStorage.getItem("SkillTraders2020!tempstar"));

                        const urlParams = new URLSearchParams(window.location.search);
                        let uid = urlParams.get('uid');

                        // db post code goes here
                        // update user (by uid) -> update reviewers array
                        // post new review
                        const submit = async () => {
                            await axios.post("/api/review", {
                                userId: uid,
                                reviewer: usersess.id,
                                rating: rating,
                                content: this.review.value
                            });
                        };
                        submit().then(() => {
                            window.alert("Review submitted!");
                            window.location.reload();
                        });
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