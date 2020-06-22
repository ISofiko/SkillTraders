import React from 'react';
import './Style.css';

class Category extends React.Component {
	render() {
		const { title, link } = this.props;

		return (
			<a href={link}>
				<div className="category">
					<h1>{title}</h1>
				</div>
			</a>
		);
	}
}

export default Category;