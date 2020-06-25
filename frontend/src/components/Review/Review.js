import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
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
                        <img id="innerreviewstylepicture" src={this.props.reviewerimage}></img>
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