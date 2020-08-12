import React from 'react';
import { uid } from 'react-uid';
import './style.css';
import StyledButton from '../StyledButton';
import Placeholder from '../../resources/placeholder.jpg';

const isAdmin = window.localStorage.getItem("SkillTraders2020!Admin");
let styling = {visibility: "hidden"};
if (isAdmin === "true") {
	styling = {visibility: "visible"};
}

class Posting extends React.Component {

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

	SkillTradertoMessages(user) {
			window.location.replace("/userprofile?uid=" + user);
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
	
	redirect = event => {
		const post = event.currentTarget.children[1].children[0].innerText; // TODO: Replace with post id (also replace with user id below)
		window.location.assign("/posting/" + post);
	};

	render() {
		const { title, user, date, price, numsessions, rating, description, tags, image } = this.props;
		let tagList = ["NONE"];
		if (tags !== undefined) {
			tagList = tags.toUpperCase().split(" ");
		}

		const strprice = this.convertPricetoString(parseInt(price), parseFloat(numsessions));

		return (
			<div className={[this.props.className, "posting", "innerpoststyle"].join(" ")} id={this.props.id}>
				<div id="innerpoststyleheader">
						<img id="innerpoststylepicture" src={image}></img><br/>
						<div id="innerpoststyleheader">
								<div><a id="innerpoststyleheadername">{user}</a></div><br/>
								{date}<br/>
						</div>
				</div><br/>
				<div id="innerpoststylelistingtitle">{title}</div> <br/>
				<div id="innerpoststylestrprice">{strprice}</div><br/>
				<div id="innerpoststyledescription">
						{description}<br/> <br/>
						Total Sessions: {numsessions}<br/><br/>
						<i>{rating} Star Patron</i><br/>
						<div className="tags">
								<h2>Tags:&nbsp;</h2>
								{tagList.map(tag => (
									<span key={uid(tag)} className="tag">{tag}</span>
								))}
						</div><br/>
						<StyledButton id="tomessageskilltrader" innerclass="contactskilltrader2" text="Contact SkillTrader" onClick={() => { this.SkillTradertoMessages(user) }}></StyledButton>
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