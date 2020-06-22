import React from 'react';
import './Style.css';
import Placeholder from '../../resources/placeholder.jpg';

class Posting extends React.Component {
	render() {
		const { title, description, user, link } = this.props;

		return (
			<a href={link}>
				<div className="posting">
					<img src={Placeholder} alt="Placeholder" />
					<div className="details">
						<h1>{title}</h1>
						<h2>Posted by {user}</h2>
						<p>{description}</p>
					</div>
				</div>
			</a>
		);
	}
}

export default Posting;