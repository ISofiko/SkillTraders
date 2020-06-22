import React from 'react';
import './Style.css';
import Category from './Category';
import Posting from './Posting';

class FindPosting extends React.Component {
	state = {
		query: ""
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
					<Category title="Health and Fitness" link="/"/>
					<Category title="Coding" />
					<Category title="Medical Consultation" />
					<Category title="Medical Consultation" />
					<Category title="Medical Consultation" />
					<Category title="Medical Consultation" />
				</div>

				<div className="postings">
					<Posting title="PHP" description="Lorem ipsum" user="David" />
					<Posting title="PHP" description="Lorem ipsum" user="David" />
				</div>
			</div>
		);
	}
}

export default FindPosting;