import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { uid } from "react-uid";
import './style.css';
import StyledButton from '../StyledButton';
import remove from "../../resources/remove.png";
import { getUser } from './../../actions/users';
const log = console.log

class Review extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                image_url: "",
                name: "Anonymous user",
                user: {
                    fname: "Loading...",
                    lname: "",
                    avgRating: 0
                },
                postings: [],
                reviews: []
            };
        }

        componentDidMount(){
            log(this.props.reviewername)
            getUser(this, this.props.reviewername).then((user) => {
                log(user)
                if (user){
                    this.setState({
                        "user": user,
                        "name": user.fname + " " + user.lname,
                        "image_url": user.image_url,
                        "joined": String(new Date(user.firstLogin)).split(" ").splice(1, 3).join(" ")
                    })
                }
            })
        }

        deleteReview() {
                // database code goes over here
        }

        adminDelete() {
                const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
                let isAdmin = false;
                if (usersess !== null) {
                  isAdmin = usersess["isAdmin"] === true;
                }
                if (isAdmin) {
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
                        <ProfileImage id="innerreviewstylepicture" src={this.state.image_url} uid="filler101"></ProfileImage>
                        <div id="innerreviewstylename">
                                <ReactStars count={5} value={this.props.stars} size={35} color2={'#ffd700'} edit={false}/>
                                {this.state.name} says...
                        </div>
                    </div>
                    <div id="innerreviewstylereview">{this.props.review}</div><br/>
                        {admindelete}
            </div>
		);
	}
}

export default Review;