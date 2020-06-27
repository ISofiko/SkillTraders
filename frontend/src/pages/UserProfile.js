import React from 'react';
import './UserProfile.css';
import ReactStars from 'react-stars';
import Sidebar from '../components/Sidebar';
import StarRating from '../components/StarRating';
import StyledButton from '../components/StyledButton';
import Review from '../components/Review';
import profile from "../resources/sample.jpg";
import profile2 from "../resources/sample2.png";
import profile3 from "../resources/sample3.jpg";
import edit from "../resources/edit.png";
import save from "../resources/save.png";

function UserProfile() {

	let savevalue = false;

	return (
		<div className="settings">
			<div className="sidebar">
				<Sidebar/>
			</div>
			<div className="right-side">
				<div className="content">
					<div>
						<img className="profile" src={profile2}></img>
						<div className="myprofile">
							<div id="header">Natalie Watson</div>
							Joined May 13th, 2020<br/>
							<div>
								<ReactStars className="headerstar" count={1} size={40} value={1} edit={false} color2={'#ffd700'} color1={'#595d78'}/> 
								<div id="startitle">4.6 Star Patron</div>
							</div><br/>
						</div>
					</div>
					<br/>
					<hr></hr><br/>
					<StarRating/>
					<br/>
					<hr/><br/>

					SkillTrader Postings go here

					<br/><br/>
					<hr></hr>
					<br/>
					<div id="userreviews">
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

export default UserProfile;
