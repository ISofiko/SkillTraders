import React from 'react';
import { uid } from 'react-uid';
import './style.css';
import Placeholder from '../../resources/placeholder.jpg';

class Posting extends React.Component {
	redirect = event => {
		const post = event.currentTarget.children[1].children[0].innerText; // TODO: Replace with post id (also replace with user id below)
		window.location.assign("/posting/" + post);
	};

	render() {
		const { title, user, date, price, description, tags, image } = this.props;
		let tagList = ["NONE"];
		if (tags !== undefined) {
			tagList = tags.toUpperCase().split(" ");
		}

		return (
			<div className="posting" onClick={this.redirect}>
				<div className="image">
					<img src={image} alt="Placeholder" />
					<p>{"$" + price}/h</p>
				</div>
				<div className="details">
					<h1>{title}</h1>
					<h2>Posted by <a className="dark-aqua" href={"/userprofile?uid=" + user}>{user}</a> on <span className="dark-aqua">{date}</span></h2>
					<div className="tags">
						<h2>Tags:&nbsp;</h2>
						{tagList.map(tag => (
							<span key={uid(tag)} className="tag">{tag}</span>
						))}
					</div>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default Posting;