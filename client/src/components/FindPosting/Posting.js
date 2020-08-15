import React from 'react';
import { uid } from 'react-uid';
import './style.css';
import StyledButton from '../StyledButton';
import Placeholder from '../../resources/placeholder.jpg';
import { getUser } from './../../actions/users'
import { getCategoryNames } from './../../actions/categories'

const log = console.log

const usersess = JSON.parse(window.localStorage.getItem("SkillTraders2020!UserSession"));
let isAdmin = false;
if (usersess !== null) {
  isAdmin = usersess["isAdmin"] === true;
}
let styling = {visibility: "hidden"};
if (isAdmin) {
	styling = {visibility: "visible"};
}

class Posting extends React.Component {

    componentWillMount() {
        getUser(this, this.props.userId)
        getCategoryNames(this, this.props.tags)
    }

    state = {
        user: {},
        tagList: []
    }

	switchState = (e) => {
		e.preventDefault();
		let currentstatebutton = e.target.parentNode.parentNode.childNodes[9].childNodes[0];
		let currentstatetile = e.target.parentNode.parentNode;
		let currentstatedescription = e.target.parentNode.parentNode.childNodes[7];
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

	SkillTradertoMessages(userId) {
			window.location.replace("/messages?uid=" + userId);

			// DB CODE GOES HERE
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

	redirect = event => {
		const post = event.currentTarget.children[1].children[0].innerText; // TODO: Replace with post id (also replace with user id below)
		window.location.assign("/posting/" + post);
	};

	render() {
		const { title, userId, date, price, numsessions, content, tags, image_url } = this.props;

		const strprice = this.convertPricetoString(parseInt(price), parseFloat(numsessions));

		return (
			<div className={[this.props.className, "posting", "innerpoststyle"].join(" ")} id={this.props.id}>
				<div id="innerpoststyleheader">
						<img id="innerpicture" src={image_url}></img><br/>
						<div><a id="innerpoststyleheadername" href={"/userprofile?uid=" + userId}>{this.state.user.fname} {this.state.user.lname}</a></div><br/>
						{date}<br/>
				</div><br/>
				<div id="innerpoststylelistingtitle">{title}</div> <br/>
				<div id="innerpoststylestrprice">{strprice}</div><br/>
				<div id="innerpoststyledescription">
						{content}<br/> <br/>
						Total Sessions: {numsessions}<br/><br/>
						<i>{this.state.user.avgRating} Star Patron</i><br/>
						<div className="tags">
								<h2>Tags:&nbsp;</h2>
								{tags.map(tag => (
									<span key={uid(tag)} className="tag">{tag}</span>
								))}
						</div><br/>
						<StyledButton id="tomessageskilltrader" innerclass="contactskilltrader2" text="Message SkillTrader" onClick={() => { this.SkillTradertoMessages(userId) }}></StyledButton>
				</div><br/>
				<StyledButton id="postmoveon" innerclass="contactskilltrader" text="View Details" onClick={(e) => { this.switchState(e) }}></StyledButton>
				<div className="actions" style={styling}>
							<a className="fa fa-pencil" onClick={this.redirect}></a>
							<a className="fa fa-trash" onClick={(e) => alert("Posting has been deleted!")}></a>
				</div>
			</div>
		);
	}
}

export default Posting;