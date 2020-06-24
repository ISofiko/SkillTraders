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
                        <img src={this.props.reviewerimage}></img>
                        {this.props.reviewername}
                    </div>
                    {this.props.stars} <br/>
                    {this.props.review}
            </div>
		);
	}
}

export default Review;