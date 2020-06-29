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
		tags: [],
		postings: [
			{ title: "Game Development in Unity", user: "Moe Ali", date: "June 28, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "technology gaming" },
			{ title: "Personal Accounting", user: "Sofia Ilina", date: "June 25, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "finance" },
			{ title: "Piano Lessons", user: "David Chen", date: "June 14, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "music" }
		]
	};

	controlInput = event => {
		this.setState({
			query: event.target.value.toLowerCase(),
		});
	};

	setTag = event => {
		const tag = event.target.innerText.toLowerCase();
		if (!this.state.tags.includes(tag)) {
			this.setState({
				tags: this.state.tags.concat(tag)
			});
			event.target.style = "background-color: #64E1E1;";
			event.target.children[0].style = "text-decoration: underline;";
		} else {
			this.setState({
				tags: this.state.tags.filter(x => x != tag)
			});
			event.target.style = "";
			event.target.children[0].style = "";
		}
	};

	render() {
		return (
			<div className="find-posting">
				<h1>Find Posting</h1>
				<input className="search-bar" type="search" placeholder="Find a posting" value={this.state.query} onChange={this.controlInput}></input>

				<div className="categories">
					{this.state.categories.map(category => (
						<Category key={uid(category)} title={category.title} icon={category.icon} click={this.setTag} />
					))}
				</div>

				<div className="postings">
					{this.state.postings.filter(posting => posting.title.toLowerCase().includes(this.state.query) && this.state.tags.every(tag => posting.tags.includes(tag))).map(posting => (
						<Posting key={uid(posting)} title={posting.title} user={posting.user} date={posting.date} description={posting.description} tags={posting.tags} link={posting.link} />
					))}
				</div>
			</div>
		);
	}
}

export default FindPosting;