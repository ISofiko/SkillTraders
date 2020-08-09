import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { uid } from "react-uid";
import './style.css';
import StyledButton from '../StyledButton';
import remove from "../../resources/remove.png";

class Review extends React.Component {

        constructor(props){
                super(props);
        }

        deleteReview() {
                // database code goes over here
        }

        adminDelete() {
                const adminaccess = window.localStorage.getItem("SkillTraders2020!Admin");
                if (adminaccess === "true") {
                        return (<StyledButton text="Delete" onClick={this.deleteReview} innerclass="removepic" innericon={remove}></StyledButton>);
                } else {
                        return;
                }
        }

	render() {

                let admindelete = this.adminDelete();

		return (
            <div className={[this.props.className, "innerreviewstyle"].join(" ")} id={this.props.id}>
                    <div id='innerreviewstyleheader'>
                        <ProfileImage id="innerreviewstylepicture" src={this.props.reviewerimage} uid="filler101"></ProfileImage>
                        <div id="innerreviewstylename">
                                <ReactStars count={5} value={this.props.stars} size={35} color2={'#ffd700'} edit={false}/>
                                {this.props.reviewername} says...
                        </div>
                    </div>
                    <div id="innerreviewstylereview">{this.props.review}</div><br/>
                        {admindelete}
            </div>
		);
	}
}

export default Review;