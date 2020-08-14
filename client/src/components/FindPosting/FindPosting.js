import React from 'react';
import { uid } from "react-uid";
import './style.css';
import Category from './Category';
import Posting from './Posting';
import { getCategories } from './../../actions/categories';
const log = console.log

class FindPosting extends React.Component {

    componentDidMount() {
        getCategories(this)
        log(this.state)
    }

	state = {
		query: "",
		categories: [],
		tags: [],
		postings: [
			{ title: "Game Development in Unity", user: "Moe Ali", date: "June 28, 2020", price: "0", numsessions:"4", rating:"3.5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "technology gaming", image: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/04/sale_21892_primary_image_wide.jpg" },
			{ title: "Personal Accounting", user: "Sofia Ilina", date: "June 25, 2020", price: "70.30", numsessions:"1", rating:"3.8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "finance", image: "https://www.cpacanada.ca/-/media/site/operational/ec-education-certification/images/g10266-ec.jpg" },
			{ title: "Piano Lessons", user: "David Chen", date: "June 14, 2020", price: "100",  numsessions:"5", rating:"4.5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", tags: "music", image: "https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg" }
		],
		users: ["Moe Ali", "Sofia Ilina", "David Chen"]
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
						<Category key={uid(category)} title={category.name} icon={category.icon} click={this.setTag} />
					))}
				</div>

				<h2>Search Results</h2><br/>
				<div className="postings">
					{this.state.postings.filter(posting => (posting.title.toLowerCase().includes(this.state.query) || posting.user.toLowerCase().includes(this.state.query)) && this.state.tags.every(tag => posting.tags.includes(tag))).map(posting => (
						<Posting key={uid(posting)} title={posting.title} user={posting.user} date={posting.date} price={posting.price} numsessions={posting.numsessions} rating={posting.rating} description={posting.description} tags={posting.tags} image={posting.image} />
					))}
				</div>
			</div>
		);
	}
}

export default FindPosting;