import React from 'react';
import { uid } from "react-uid";
import './style.css';
import Category from './Category';
import Posting from './Posting';

class FindPosting extends React.Component {
	state = {
		query: "",
		categories: [
			{ title: "Fitness", icon: "soccer-ball-o" },
			{ title: "Technology", icon: "code" },
			{ title: "Health", icon: "medkit" },
			{ title: "Finance", icon: "usd" },
			{ title: "Gaming", icon: "gamepad" },
			{ title: "Music", icon: "music" }
		],
		postings: [
			{ title: "PHP", user: "Moe Ali", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
			{ title: "Basket Weaving", user: "Sofia Ilina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
			{ title: "Cooking", user: "David Chen", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
		]
	};

	controlInput = event => {
		this.setState({
			query: event.target.value
		});
	};

	render() {
		return (
			<div className="find-posting">
				<h1>Find Posting</h1>
				<input className="search-bar" type="search" placeholder="Find a posting" value={this.state.query} onChange={this.controlInput}></input>

				<div className="categories">
					{this.state.categories.map(category => (
						<Category key={uid(category)} title={category.title} icon={category.icon} link={category.link} />
					))}
				</div>

				<div className="postings">
					{this.state.postings.map(posting => (
						<Posting key={uid(posting)} title={posting.title} user={posting.user} description={posting.description} link={posting.link} />
					))}
				</div>
			</div>
		);
	}
}

export default FindPosting;