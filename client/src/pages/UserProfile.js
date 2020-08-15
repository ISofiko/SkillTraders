import React from 'react';
import './UserProfile.css';
import ReactStars from 'react-stars';
import Sidebar from '../components/Sidebar';
import PostingDetails from '../components/PostingDetails';
import StarRating from '../components/StarRating';
import StyledButton from '../components/StyledButton';
import Review from '../components/Review';
import defaultAvatar from "../resources/avatar.png";
import profile from "../resources/sample.jpg";
import profile2 from "../resources/sample2.png";
import profile3 from "../resources/sample3.jpg";
import edit from "../resources/edit.png";
import save from "../resources/save.png";
import { getUser } from './../actions/users'
import { getPostings } from './../actions/postings'
const axios = require("axios");
const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
const serverURL = "http://localhost:5000";
const log = console.log

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image_url: "",
			joined: "...",
			user: {
				fname: "Loading...",
				lname: "",
				avgRating: 0
			},
			postings: []
		};
	}

	componentDidMount() {
		const url = window.location.href;
		this.username = url.split("?uid=").pop();
		log("username: ", this.username)
		getUser(this, this.username).then((user) => {
		    if (user){
                this.setState({
                    "user": user,
                    "image_url": user.image_url,
                    "joined": String(new Date(user.firstLogin)).split(" ").splice(1, 3).join(" ")
                })
		    } else {
                this.setState({
                    "image_url": defaultAvatar
                });

		    }
        })

        getPostings(this.username, this).then((postings) => {
            log(postings)
            this.setState({"postings": postings})
            log(this.state)
        })
	}

	render() {
		return (
			<div className="settings">
				<div className="sidebar">
					<Sidebar/>
				</div>
				<div className="right-side">
					<div className="content">
						<div>
							<img className="profile" src={this.state.image_url}></img>
							<div className="myprofile">
								<div id="header">{this.state.user.fname + " " + this.state.user.lname}</div>
								Joined {this.state.joined}<br/>
								<div>
									<ReactStars className="headerstar" count={5} size={40} value={this.state.user.avgRating} edit={false} color2={'#ffd700'} color1={'#595d78'}/>
									<div id="startitle">{this.state.user.avgRating} Star Patron</div>
								</div><br/>
							</div>
						</div>
						<br/>
						<hr></hr><br/>
						<StarRating/>
						<br/>
						<hr/><br/>

						<div className="postings">
                            {this.state.postings.map(posting => (
                                <PostingDetails
                                key={posting._id}
                                title={posting.title}
                                username={this.state.user.fname + " " + this.state.user.lname}
                                date={String(new Date(posting.timestamp)).split(" ").splice(1, 3).join(" ")}
                                price={posting.price}
                                numsessions={posting.numSessions}
                                rating={this.state.user.avgRating}
                                content={posting.content}
                                tags={posting.categories}
                                image_url={posting.image_url}
                                 />
                            ))}
                        </div>

						<br/>
						<hr></hr>
						<br/>
						<div id="userreviews">
							{// FILLER! db code goes here Sample elements currently drawn
							}
							<Review className="review" stars={5} reviewername="David Ali" reviewerimage={profile} review="Good teacher"></Review>
							<Review className="review" stars={4.7} reviewername="Ali Ilina" reviewerimage={profile3} review="He would put on a yoga video and watch me doing the exercise while eating a bag of doritos. Great!"></Review>
							<Review className="review" stars={3.7} reviewername="Sofia Chen" reviewerimage={save} review="Always makes out time to help me out! Great person!"></Review><br/><br/>
						</div>
						<br/>
					</div>
				</div>
			</div>
		);
	}
	
}

export default UserProfile;
