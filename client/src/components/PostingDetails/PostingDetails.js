import React from 'react';
import ReactStars from 'react-stars'
import { BrowserRouter as Router, Route,Switch, Redirect, useHistory} from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { uid } from "react-uid";
import StyledButton from "../StyledButton";
import './style.css';
import profile3 from "../../resources/sample2.png";

class PostingDetails extends React.Component {

        constructor(props){
                super(props);
                this.getPostInfo = this.getPostInfo.bind(this);
                this.SkillTradertoMessages = this.SkillTradertoMessages.bind(this);
        }

        switchState = (e) => {
                e.preventDefault();
                let currentstatebutton = e.target.parentNode.parentNode.childNodes[9].childNodes[0];
                let currentstatetile = e.target.parentNode.parentNode;
                let currentstatedescription = e.target.parentNode.parentNode.childNodes[7];
                console.log(currentstatebutton)
                if (currentstatebutton.textContent === "View Details") {
                        currentstatetile.style.WebkitAnimation = "small-to-big 1.5s forwards";
                        currentstatebutton.textContent = "Close Details";
                        currentstatedescription.style.display = "block";
                } else {
                        currentstatetile.style.WebkitAnimation = "big-to-small 1.5s forwards";
                        currentstatebutton.textContent = "View Details";
                        currentstatedescription.style.display = "none";
                }
        }

        SkillTradertoMessages(uid) {
                window.location.replace("/messages?uid="+uid);
        }

        getPostInfo(pid) {
                // ?? with given listing post id
                // FILLER! db code goes here Sample elements currently drawn				}
                // connecting to db and getting stuff like username, listing title, listing description, uid, price and price frequency
        }

        convertPricetoString(numprice, pricefreq) {
                // converting the price to a string value
                if (numprice === 0) {
                        return("Free");
                }
                if (pricefreq > 1) {
                        return(numprice + "$ per session");
                }
                // otherwise, return just the price
                return (numprice + "$");
        }


	render() {

                // temp vars FILLER (use getPostInfo and db values in prod) GET ALL THE FOLLOWING FROM DB USING THE PID
                const uid = this.props.uid // or just get uid from pid instead of as props
                const username = "Natalie Watson";
                const listingtitle = "One-on-One Acting Coaching Lessons in Belleville";
                const numsessions = 8;
                const rating = 4.3;
                const strprice = this.convertPricetoString(88, numsessions);
                const postdate = "May 21, 2020";
                const description = "Join me, Natalie Watson, to undergo an 8 week virtual acting coaching class! Not only would you be" +
                " supporting me a local community famous theatre actress but you will also be building up you or your child's career" +
                "! Classes take place on Zoom and are weekly. No refunds. I have been working in film, cinema and theatre for over 10 years"
                + " and have 3 years of teaching experience here in Belleville.";
                

		return (
            <div className={[this.props.className, "innerpoststyle"].join(" ")} id={this.props.id}>
                        <div id="innerpoststyleheader">
                                <img id="innerpicture" src={profile3}></img><br/>
                                <div id="innerpoststyleheader">
                                        <div id="innerpoststyleheadername">{username}</div><br/>
                                        {postdate}<br/>
                                </div>
                        </div><br/>
                        <div id="innerpoststylelistingtitle">{listingtitle}</div> <br/>
                        <div id="innerpoststylestrprice">{strprice}</div><br/>
                        <div id="innerpoststyledescription">
                                {description}<br/> <br/>
                                Total Sessions: {numsessions}<br/><br/>
                                <i>{rating} Star Patron</i><br/>
                                <StyledButton id="tomessageskilltrader" innerclass="contactskilltrader2" text="Message SkillTrader" onClick={() => { this.SkillTradertoMessages(uid) }}></StyledButton>
                        </div><br/>
                        <StyledButton id="postmoveon" innerclass="contactskilltrader" text="View Details" onClick={(e) => { this.switchState(e) }}></StyledButton>
            </div>
		);
	}
}

export default PostingDetails;