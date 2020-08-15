import React from 'react';
import { uid } from "react-uid";
import './style.css';
import Category from './Category';
import Posting from './Posting';
import { getCategories } from './../../actions/categories'
import { getAllPostings } from './../../actions/postings'
const log = console.log

class FindPosting extends React.Component {

    componentDidMount() {
        getCategories(this)
        getAllPostings(this)
        log(this.state)
    }

	state = {
		query: "",
		categories: [],
		tags: [],
		postings: []
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
				<input className="search-bar" type="search" placeholder="Search by posting title or user" value={this.state.query} onChange={this.controlInput}></input>

				<h2>Categories</h2>
				<div className="categories">
					{this.state.categories.map(category => (
						<Category
						key={uid(category)}
						title={category.name}
						icon={category.icon}
						click={this.setTag} />
					))}
				</div>

				<h2>Search Results</h2><br/>
				<div className="postings">
					{this.state.postings.filter(posting => (posting.title.toLowerCase().includes(this.state.query) || posting.user.toLowerCase().includes(this.state.query)) && this.state.tags.every(tag => posting.tags.includes(tag))).map(posting => (
						<Posting
						key={posting._id}
						title={posting.title}
						userId={posting.userId}
						date={posting.timestamp}
						price={posting.price}
						numsessions={posting.numSessions}
						content={posting.content}
						tags={posting.categories}
						image_url={posting.image_url}
						 />
					))}
				</div>
			</div>
		);
	}
}

export default FindPosting;